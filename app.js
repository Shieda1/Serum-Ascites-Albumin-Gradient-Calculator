// https://www.omnicalculator.com/health/saag

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const serumascitesalbumingradientRadio = document.getElementById('serumascitesalbumingradientRadio');
const serumalbuminconcentrationRadio = document.getElementById('serumalbuminconcentrationRadio');
const asciticfluidalbuminconcentrationRadio = document.getElementById('asciticfluidalbuminconcentrationRadio');

let serumascitesalbumingradient;
let serumalbuminconcentration = v1;
let asciticfluidalbuminconcentration = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

serumascitesalbumingradientRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum albumin concentration';
  variable2.textContent = 'Ascitic fluid albumin concentration';
  serumalbuminconcentration = v1;
  asciticfluidalbuminconcentration = v2;
  result.textContent = '';
});

serumalbuminconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum-ascites albumin gradient';
  variable2.textContent = 'Ascitic fluid albumin concentration';
  serumascitesalbumingradient = v1;
  asciticfluidalbuminconcentration = v2;
  result.textContent = '';
});

asciticfluidalbuminconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum-ascites albumin gradient';
  variable2.textContent = 'Serum albumin concentration';
  serumascitesalbumingradient = v1;
  serumalbuminconcentration = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(serumascitesalbumingradientRadio.checked)
    result.textContent = `Serum-ascites albumin gradient = ${computeserumascitesalbumingradient().toFixed(2)}`;

  else if(serumalbuminconcentrationRadio.checked)
    result.textContent = `Serum albumin concentration = ${computeserumalbuminconcentration().toFixed(2)}`;

  else if(asciticfluidalbuminconcentrationRadio.checked)
    result.textContent = `Ascitic fluid albumin concentration = ${computeasciticfluidalbuminconcentration().toFixed(2)}`;
})

// calculation

function computeserumascitesalbumingradient() {
  return Number(serumalbuminconcentration.value) - Number(asciticfluidalbuminconcentration.value);
}

function computeserumalbuminconcentration() {
  return Number(serumascitesalbumingradient.value) + Number(asciticfluidalbuminconcentration.value);
}

function computeasciticfluidalbuminconcentration() {
  return Number(serumalbuminconcentration.value) - Number(serumascitesalbumingradient.value);
}