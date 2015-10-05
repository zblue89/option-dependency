# Option Dependency
Filter out the selected option from the other select element

# Install

This is a jQuery plugin, therefore the jQuery library is required. Please include the jQuery library before including iPreview plugin.

Example of including Option Dependency plugin:

	<script src="../js/jquery.optionDependency.js"></script>

# Usage

In your HTML, declare two select elements. For the child element, you may use `optgroup` or `data-parent-val` attribute to determine if the option will be displayed or shown when the select value of the parent element match the label of `optgroup` or the value of `data-parent-val` For example:

	<select id="select-1">
		<option value="val1">Value 1</option>
		<option value="val2">Value 2</option>
		...
	</select>
	...
	<select id="select-2">
		<optgroup label="val1">
			<option value="s1val1">Sub 1 Value 1</option>
			<option value="s1val2">Sub 1 Value 2</option>
		</optgroup>
		<optgroup label="val2">
			<option value="s2val1">Sub 2 Value 1</option>
			<option value="s2val2">Sub 2 Value 2</option>
		</optgroup>
		...
	</select>

In your javascript part, initialize option dependency after the DOM elements are ready with the following code:

	$('#select-1').dependedBy('#select-2');


