import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';


/**
 * Node for to-do item
 */
export class TodoItemNode {
	children: TodoItemNode[];
	item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
	item: string;
	level: number;
	expandable: boolean;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
	'Folder 1': {
		'Subfolder 1 level 2': null,
		'Subfolder 2 level 2': null,
		'Subfolder 3 level 2': null,
		'Subfolder 4 level 2': {
			'Subfolder 1 level 2': null,
			'Subfolder 2 level 2': [
				'Subfolder 1 level 3',
				'Subfolder 2 level 3'
			],
			'Subfolder 3 level 2': null
		}
	},
	'Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sociosqu integer vel, cursus suscipit tempus tempor feugiat eu varius': [
		'Subfolder 1 level 2',
		'Subfolder 2 level 2',
		'Subfolder 3 level 2'
	],
	'Folder 3': {
		'Subfolder 1 level 2': null,
		'Subfolder 2 level 2': null,
		'Subfolder 3 level 2': null,
		'Subfolder 4 level 2': {
			'Subfolder 1 level 2': null,
			'Subfolder 2 level 2': [
				'Subfolder 1 level 3',
				'Subfolder 2 level 3'
			],
			'Subfolder 3 level 2': null
		}
	},
	'Folder 4': {
		'Subfolder 1 level 2': null,
		'Subfolder 2 level 2': null,
		'Subfolder 3 level 2': null
	},
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
	dataChange = new BehaviorSubject<TodoItemNode[]>([]);

	get data(): TodoItemNode[] { return this.dataChange.value; }

	constructor() {
		this.initialize();
	}

	initialize() {
		// Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
		// file node as children.
		const data = this.buildFileTree(TREE_DATA, 0);

		// Notify the change.
		this.dataChange.next(data);
	}

	/**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
	buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
		return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
			const value = obj[key];
			const node = new TodoItemNode();
			node.item = key;

			if (value != null) {
				if (typeof value === 'object') {
					node.children = this.buildFileTree(value, level + 1);
				} else {
					node.item = value;
				}
			}

			return accumulator.concat(node);
		}, []);
	}
}


/**
 * @title Tree selectable
 */
@Component({
	selector: 'ntx-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss'],
	providers: [ChecklistDatabase],
	encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {

	/** Map from flat node to nested node. This helps us finding the nested node to be modified */
	flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

	/** Map from nested node to flattened node. This helps us to keep the same object for selection */
	nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

	/** A selected parent node to be inserted */
	/*selectedParent: TodoItemFlatNode | null = null;*/

	/** The new item's name */
	newItemName = '';

	treeControl: FlatTreeControl<TodoItemFlatNode>;

	treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

	dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

	/** The selection for checklist */
	checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

	menuOptionsAdvanced: {
		icon: string;
		actions: {
			showmenuOptions: boolean;
			showIconOptions: boolean;
			showDivider: boolean;
			showButtons: boolean;
			iconOptions: string;
			title: string;
			buttonText: string;
			disabled: boolean;
			click: () => void;
		}[];
	};

	constructor(private database: ChecklistDatabase) {
		this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
			this.isExpandable, this.getChildren);
		this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
		this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

		const newLocal = database.dataChange.subscribe(data => {
			this.dataSource.data = data;
		});
	}

	getLevel = (node: TodoItemFlatNode) => node.level;

	isExpandable = (node: TodoItemFlatNode) => node.expandable;

	getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

	hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

	hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

	/***
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
 */
	transformer = (node: TodoItemNode, level: number) => {
		const existingNode = this.nestedNodeMap.get(node);
		const flatNode = existingNode && existingNode.item === node.item
				? existingNode
				: new TodoItemFlatNode();
		flatNode.item = node.item;
		flatNode.level = level;
		flatNode.expandable = !!node.children;
		this.flatNodeMap.set(flatNode, node);
		this.nestedNodeMap.set(node, flatNode);
		return flatNode;
	}

	/** Check root node checked state and change it accordingly */
	checkRootNodeSelection(node: TodoItemFlatNode): void {
		const nodeSelected = this.checklistSelection.isSelected(node);
		if (nodeSelected) {
			this.checklistSelection.deselect(node);
		} else if (!nodeSelected) {
			this.checklistSelection.select(node);
		}
	}

	ngOnInit() {

		this.menuOptionsAdvanced = {
			icon: 'icon-more-options',
			actions: [
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Archive',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Archive\' option'); }
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Notifications',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Notifications\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Edit',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-trash',
					title: 'Delete',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-download',
					title: 'Download and option with a very long text',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Download\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button two',
					click: function() {}
				},
			]
		};

	}

}
