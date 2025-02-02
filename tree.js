/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		let total = 0;
		const toVisitStack = [];
		if (this.root) {
			toVisitStack.push(this.root);
		}
		while (toVisitStack.length) {
			const current = toVisitStack.pop();
			total = total + current.val;
			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return total;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		let count = 0;
		const toVisitStack = [];
		if (this.root) {
			toVisitStack.push(this.root);
		}
		while (toVisitStack.length) {
			const current = toVisitStack.pop();
			if (current.val % 2 === 0) {
				count = count + 1;
			}
			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		let count = 0;
		const toVisitStack = [];
		if (this.root) {
			toVisitStack.push(this.root);
		}
		while (toVisitStack.length) {
			const current = toVisitStack.pop();
			if (current.val > lowerBound) {
				count = count + 1;
			}
			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return count;
	}
}

module.exports = { Tree, TreeNode };
