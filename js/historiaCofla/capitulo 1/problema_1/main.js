let dineroRoberto = prompt(`¿Cuanto dinero tiene Roberto?`);
let dineroPedro = prompt(`¿Cuanto dinero tiene Pedro?`);
let dineroCofla = prompt(`¿Cuanto dinero tiene Cofla?`);

let helado1 = 0.6;
let helado2 = 1;
let helado3 = 1.6;
let helado4 = 1.7;
let helado5 = 1.8;
let helado6 = 2.9;
let helado7 = 2.9;

if (dineroRoberto >= helado7 && helado6) {
    alert(`Roberto puede comprar el Pote de 1/4 KG y el Potecitos de helado confites `);
} else if (dineroRoberto >= helado5) {
    alert(`Roberto puede comprar el Bombon helado marca helardo`);
} else if (dineroRoberto >= helado4) {
    alert(`Roberto puede comprar el Bombon helado marca heladovich`);
} else if (dineroRoberto >= helado3) {
    alert(`Roberto puede comprar el Bombon helado marca heladix`);
} else if (dineroRoberto >= helado2) {
    alert(`Roberto puede comprar el Palito de helado de crema`);
} else if (dineroRoberto >= helado1) {
    alert(`Roberto puede comprar el Palito de helado de agua`);
} else {
    alert(`No puedes comprar ningun helado`);
}

if (dineroPedro >= helado7 && helado6) {
    alert(`Pedro puede comprar el Pote de 1/4 KG y el Potecitos de helado confites `);
} else if (dineroPedro >= helado5) {
    alert(`Pedro puede comprar el Bombon helado marca helardo`);
} else if (dineroPedro >= helado4) {
    alert(`Pedro puede comprar el Bombon helado marca heladovich`);
} else if (dineroPedro >= helado3) {
    alert(`Pedro puede comprar el Bombon helado marca heladix`);
} else if (dineroPedro >= helado2) {
    alert(`Pedro puede comprar el Palito de helado de crema`);
} else if (dineroPedro >= helado1) {
    alert(`Pedro puede comprar el Palito de helado de agua`);
} else {
    alert(`No puedes comprar ningun helado`);
}

if (dineroCofla >= helado7 && helado6) {
    alert(`Cofla puede comprar el Pote de 1/4 KG y el Potecitos de helado confites `);
    alert(`y a Cofla se sobra ` + dineroCofla - helado7 + " USD");
} else if (dineroCofla >= helado5) {
    alert(`Cofla puede comprar el Bombon helado marca helardo`);
} else if (dineroCofla >= helado4) {
    alert(`Cofla puede comprar el Bombon helado marca heladovich`);
} else if (dineroCofla >= helado3) {
    alert(`Cofla puede comprar el Bombon helado marca heladix`);
} else if (dineroCofla >= helado2) {
    alert(`Cofla puede comprar el Palito de helado de crema`);
} else if (dineroCofla >= helado1) {
    alert(`Cofla puede comprar el Palito de helado de agua`);
} else {
    alert(`No puedes comprar ningun helado`);
}