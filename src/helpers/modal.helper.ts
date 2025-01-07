export function setFocusableTrapElements(parent: HTMLElement, evt: KeyboardEvent) {
  const focusableElements = parent.querySelectorAll(
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
  );
  if (!focusableElements?.length) return;
  const firstElement: HTMLElement = focusableElements[0] as HTMLElement;
  const lastElement: HTMLElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement;
  if (evt.shiftKey && document.activeElement == firstElement) {
    evt.preventDefault();
    lastElement?.focus();
  } else if (!evt.shiftKey && document.activeElement == lastElement) {
    evt.preventDefault();
    firstElement?.focus();
  }
}
