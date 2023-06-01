document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveSettings);
});

function saveSettings() {
    // const textColor = document.getElementById('textColor').value;
    // const outlineColor = document.getElementById('outlineColor').value;

    const backgroundUrl = document.getElementById('backgroundUrl').value;

    chrome.storage.sync.set({ backgroundUrl }, function () {
        console.log('Settings saved!');
    });

    // chrome.storage.sync.set({ textColor, outlineColor }, function () {
    //     console.log('Settings saved!');
    // });
}