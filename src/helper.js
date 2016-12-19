export function readText(state) {
    const activePageId = state.activePageId;
    const isDisabled = activePageId === null;

    let text = "";
    if (isDisabled) {
        text = "";
    } else if (activePageId && state.pages.length > 0) {
        const p = state.pages.find(page => page.id === activePageId);
        if (p) {
            text = p.text;
        }
    }

    return {
        activePageId: activePageId,
        text: text
    };
}