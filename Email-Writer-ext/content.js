console.log("Email Writer Extension");

function injectButton() {
     const existingButton = document.querySelector('.ai-reply-button');
     if(existingButton) existingButton.remove();

     const toolbar = findComposeToolbat();
     if(toolbar){
        console.log("Toolbar not found");
        return;
     }

     console.log("Toolbar found,creating AI button");
     const buttton = createAIButton();

     buttton.addEventListener('click',async()=>{
        
     })
}

const observer = new MutationObserver((mutations)=>{
    for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node=>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh,.btC,[role="dialog"]')|| node.queryselector('.aDh,.btC,[role="dialog"]')) 
        );

        if(hasComposeElements){
            console.log("Compose Window Detected");
            setTimeout(injectButton,500);
        }
    }
});

observer.observe(document.body,{
    childList:true,
    subtree:true
})