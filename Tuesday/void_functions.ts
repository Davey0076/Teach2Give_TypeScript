const addClickEventListener = (listener: () => void) => {
    //Parameter 'listener' implicitly has an 'any' type.
    document.addEventListener("click", listener);
};

addClickEventListener(() => {
    console.log("Clicked!");
});

addClickEventListener(
    // @ts-expect-error
    "abc",
);