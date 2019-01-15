/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DB4D2D22-8429-43A5-9C92-60634B1B95A2"}
 */
function onShow(firstShow, event) {
	elements.pad_339.init({ })
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} [type]
 * @private
 *
 * @properties={typeid:24,uuid:"EACE240F-57B2-45DC-82C1-A0413831BCB3"}
 */
function onAction$clear(event, type) {
	elements.pad_339.init({ })
	elements.pad_339.clear();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F9A7BE6F-97A5-41E4-A653-CF9C4FBEBCA5"}
 */
function onAction$save(event) {
	var data = elements.pad_339.getDataUrl("image/png")
	application.output(data);
	onAction$clear(event);
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"505F562D-3734-442A-9ED2-40D3B45C69FE"}
 */
function onBegin() {
	application.output('start drawing');
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"D8C26BEF-3405-407F-AC73-34E1921ADAC1"}
 */
function onEnd() {
	application.output('end drawing');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6E4C8A81-AF82-4145-83A4-1B5CAE744FBD"}
 */
function onAction$loadData(event) {
	elements.pad_339.init({
		penColor:"orange",
		minWidth:5
	})
	elements.pad_339.setDataUrl('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAtAFAAMBIgACEQEDEQH/xAAeAAEAAQQDAQEAAAAAAAAAAAAACQYHCAoBAgUEA//EAFwQAQABAwMBBAUFBw4LBgMJAAABAgMEBQYRBwgSITEJE0FRYRQiMnGBGSM4QleCkRVSVWJ1dpKTlaGys9PUFxgkM3KDorHB0dIWc5TCw/BDU7QoNDZER1ZllqT/xAAcAQEAAwEBAQEBAAAAAAAAAAAABQYHBAgDAQL/xAA0EQEAAQMBBAgFBAEFAAAAAAAAAQIDBAUGESExEhNBUWFxobGBkcHR4RQiMlIzFiNyovD/2gAMAwEAAhEDEQA/AIqpnkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z')
}