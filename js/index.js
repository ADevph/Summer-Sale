
let total = 0;
const applyBtn = document.getElementById("applyBtn");
const purchaseBtn = document.getElementById("purchaseBtn");
const couponInput = document.getElementById("couponInput");

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[1].innerText;

  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);

  
  const price = target.childNodes[5].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;


  applyBtn.disabled = total < 200;
  purchaseBtn.disabled = total <= 0;
}

function openPurchaseModal() {
    my_modal_1.showModal();
  }

  function goHome() {
    window.location.href = "index.html";
  }

function applyCoupon() {
    const couponCode = couponInput.value;
    if (couponCode === "SELL200" && total >= 200) {
      const discount = 0.2 * total;
      const finalTotal = total - discount;
      document.getElementById("final").innerText = finalTotal.toFixed(2);
      document.getElementById("discount").innerText = discount.toFixed(2);
    }
  }
