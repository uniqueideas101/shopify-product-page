function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

function updateVariant(variant) {
    console.log('Selected Color: ' + variant);
}

function updateVariantSize(size) {
    console.log('Selected Size: ' + size);
}

function toggleModal() {
    const modal = document.getElementById('size-chart-modal');
    const isVisible = modal.style.display === "flex";
    modal.style.display = isVisible ? "none" : "flex";
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function openCompareModal() {
    const modal = document.getElementById('compare-modal');
    modal.style.display = 'block';
}

function closeCompareModal() {
    const modal = document.getElementById('compare-modal');
    modal.style.display = 'none';
}

function selectCompareColor(color) {
    console.log('Selected Compare Color: ' + color);
}

function compareSelectedColours() {
    console.log('Comparing Colours...');
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("size-chart-modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", function (e) {
  const modal = document.getElementById("size-chart-modal");
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
  }
});

function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}



let selectedColours = [];

document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const dressName = swatch.dataset.dress;

    if (selectedColours.includes(dressName)) {
      selectedColours = selectedColours.filter(item => item !== dressName);
      swatch.classList.remove('selected');
    } else {
      if (selectedColours.length < 2) {
        selectedColours.push(dressName);
        swatch.classList.add('selected');
      } else {
        alert('You can only compare two colours at a time.');
      }
    }
  });
});

function openCompareModal() {
  document.getElementById('compare-modal').style.display = 'flex';
}

function compareSelectedColours() {
  if (selectedColours.length < 2) {
    alert('Select at least two colours to compare.');
    return;
  }

  const comparisonContainer = document.getElementById('comparison-result');
  comparisonContainer.innerHTML = ''; 

  selectedColours.forEach(colour => {
    const img = document.createElement('img');

    if (colour === 'Orange Dress') img.src = "assets/orange.jpg";
    else if (colour === 'Pink Dress') img.src = 'assets/pink.jpg';
    else if (colour === 'Lightblue Dress') img.src = 'assets/lightblue.jpg';

    img.alt = colour;
    img.style.width = '120px'; 
    img.style.border = '1px solid #ccc';
    img.style.borderRadius = '4px';

    comparisonContainer.appendChild(img);
  });
}

function openTab(event, tabId) {
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  event.target.classList.add('active');
}

 window.addEventListener('DOMContentLoaded', () => {
    openTab({target: document.querySelector('.tab-btn.active')}, 'description');
  });