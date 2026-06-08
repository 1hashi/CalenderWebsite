const maartenBaan1Input = document.getElementById("maartenBaan1") as HTMLInputElement;
const maartenBaan2Input = document.getElementById("maartenBaan2") as HTMLInputElement;
const gaiaBaanInput = document.getElementById("gaiaBaan") as HTMLInputElement;
const maartenDuoInput = document.getElementById("maartenDuo") as HTMLInputElement;
const gaiaDuoInput = document.getElementById("gaiaDuo") as HTMLInputElement;
const zorgtoeslagInput = document.getElementById("zorgtoeslag") as HTMLInputElement;

const maartenBaan1: number = maartenBaan1Input.valueAsNumber;
const maartenBaan2: number = maartenBaan2Input.valueAsNumber;
const gaiaBaan: number = gaiaBaanInput.valueAsNumber;
const maartenDuo: number = maartenDuoInput.valueAsNumber;
const gaiaDuo: number = gaiaDuoInput.valueAsNumber;
const zorgtoeslag: number = zorgtoeslagInput.valueAsNumber;

const totaleInkomsten: number = maartenBaan1+maartenBaan2+gaiaBaan+maartenDuo+gaiaDuo+zorgtoeslag;
console.log(totaleInkomsten);

// const num1Input = document.getElementById("num1") as HTMLInputElement;
// const num2Input = document.getElementById("num2") as HTMLInputElement;
// const button = document.getElementById("calculate") as HTMLButtonElement;
// const result = document.getElementById("result") as HTMLParagraphElement;

// button.addEventListener("click", () => {
//     const num1 = Number(num1Input.value);
//     const num2 = Number(num2Input.value);

//     result.textContent = String(num1 + num2);
// });



// <div class="grid-2 mb-3">
// <div class="form-group">
// <label class="form-label" for="maartenBaan1">Baan 1 Maarten</label>
//   <div class="input-group"><span class="addon">€</span><input type="number" id="maartenBaan1" class="form-input" placeholder="0.00"></div>
//    </div>
//          <div class="form-group">
//  <label class="form-label" for="maartenBaan2">Baan 2 Maarten</label>
// <div class="input-group"><span class="addon">€</span><input type="number" id="maartenBaan2" class="form-input" placeholder="0.00"></div>
//   </div>
//   <div class="form-group">
//       <label class="form-label" for="gaiaBaan">Baan Gaia</label>
//   <div class="input-group"><span class="addon">€</span><input type="number" id="gaiaBaan" class="form-input" placeholder="0.00"></div>
//    </div>
//    <div class="form-group">
//   <label class="form-label" for="maartenDuo">Duo Maarten</label>
//    <div class="input-group"><span class="addon">€</span><input type="number" id="maartenDuo" class="form-input" placeholder="0.00"></div>
//   </div>
//    <div class="form-group">
//    <label class="form-label" for="gaiaDuo">Duo Gaia</label>
//  <div class="input-group"><span class="addon">€</span><input type="number" id="gaiaDuo" class="form-input" placeholder="0.00"></div>
//      </div>
//   <div class="form-group">
//   <label class="form-label" for="zorgtoeslag">Zorgtoeslag</label>
//   <div class="input-group"><span class="addon">€</span><input type="number" id="zorgtoeslag" class="form-input" placeholder="0.00"></div>
//    </div>
//   </div>