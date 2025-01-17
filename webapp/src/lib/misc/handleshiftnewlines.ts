'use strict';

export default function handleShiftNewlines(e, value, onSubmit, setInputValue, scrollToBottom?, chatBusyState?) {
	scrollToBottom && scrollToBottom();
	if (e.key === 'Enter' && !e.shiftKey) {
		e.preventDefault();
		if (chatBusyState) { return; }
		if (value.trim().length > 0) {
			onSubmit(e);		
			setInputValue('');
		}
	}
}
