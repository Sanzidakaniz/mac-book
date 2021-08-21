// #### addEventListener for memory portion #####//////

 function changeExtraMemoryCost(change){
 if(change==true){
    const newExtraMemory=document.getElementById('extra-memory-cost');
    newExtraMemory.innerText='180';
    
 }
 else{
     document.getElementById('extra-memory-cost').innerText='0';
    
}
getTotalPrice();
disableButton(false);


 }

 document.getElementById('8gb-memory').addEventListener('click',function(){
    changeExtraMemoryCost(false);
    
 })

 document.getElementById('16gb-memory').addEventListener('click',function(){
    changeExtraMemoryCost(true);
 })


    

// *****addEventListener for storage portion*****/////

function changeExtraStorageCost(modify,storage){
if(modify==false){
    document.getElementById('extra-storage-cost').innerText='0';
}
 else{
     if(storage=="1tb"){
        document.getElementById('extra-storage-cost').innerText='180';
    }
     else{
        document.getElementById('extra-storage-cost').innerText='100';
    }
 }
 getTotalPrice();
 disableButton(false);
}

document.getElementById('256gb-ss-storage').addEventListener('click',function(){
    changeExtraStorageCost(false,"256gb");
})
document.getElementById('512gb-ss-storage').addEventListener('click',function(){
    changeExtraStorageCost(true,"512gb");
})
document.getElementById('1tb-ss-storage').addEventListener('click',function(){
    changeExtraStorageCost(true,"1tb");
})



// #### addEventListener for delivery charge portion #####//////


function changeDeliveryCharge(difference){
    if(difference==true){
        document.getElementById('delivery-cost').innerText='20';
    }
    else{
        document.getElementById('delivery-cost').innerText='0';
    }
    getTotalPrice();
    disableButton(false);
    }
    
    document.getElementById('free-delivery').addEventListener('click',function(){
        changeDeliveryCharge(false);
        
    })
    
    document.getElementById('delivery-charge').addEventListener('click',function(){
        changeDeliveryCharge(true);
    })
    
    
// *******total price portion****/////
function getTotalPrice(){
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    
  
   const total=bestPrice+extraMemoryCost+extraStorageCost+deliveryCost;

   document.getElementById('total-price').innerText=total;
   document.getElementById('new-total-price').innerText=total;

}


// promo code portion//////

function discountTotal(){
    const newInput=document.getElementById('new-input');
    const input=newInput.value;
if(input=='stevekaku'){
   const newTotal= parseFloat(document.getElementById('new-total-price').innerText);
   const discount=newTotal*0.2;
   const modifiedTotal=newTotal-discount;

   document.getElementById('new-total-price').innerText=modifiedTotal;
   disableButton(true);
}

newInput.value='';
}

//$$$$ accept button disable portion $$$$//////
function disableButton(yes){
    if(yes){
    const button = document.getElementById('apply-button');
    button.disabled = true;
}
else{
    const button = document.getElementById('apply-button');
    button.disabled = false;
}
}