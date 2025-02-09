const presenceEl = document.getElementById('presence');
const nomsEl = document.getElementById('noms');

presenceEl.addEventListener('change', updateLink);
nomsEl.addEventListener('input', updateLink);

function updateLink() {
    const presence = presenceEl.value;
    const noms = nomsEl.value;
    const subject = `RSVP Mariage Sarah & Julien - ${presence}`;
    const body = `Noms: ${noms}\nPrésence: ${presence}`;
    const mailtoLink = `mailto:s.nehme.perso@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('mailto').setAttribute('href', mailtoLink);
    console.log(mailtoLink);
};