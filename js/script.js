const RAW = `1|H|Hidrogênio|1.008|nm|2.20
2|He|Hélio|4.0026|ng|-
3|Li|Lítio|6.94|al|0.98
4|Be|Berílio|9.0122|at|1.57
5|B|Boro|10.81|md|2.04
6|C|Carbono|12.011|nm|2.55
7|N|Nitrogênio|14.007|nm|3.04
8|O|Oxigênio|15.999|nm|3.44
9|F|Flúor|18.998|ha|3.98
10|Ne|Neônio|20.180|ng|-
11|Na|Sódio|22.990|al|0.93
12|Mg|Magnésio|24.305|at|1.31
13|Al|Alumínio|26.982|pt|1.61
14|Si|Silício|28.085|md|1.90
15|P|Fósforo|30.974|nm|2.19
16|S|Enxofre|32.06|nm|2.58
17|Cl|Cloro|35.45|ha|3.16
18|Ar|Argônio|39.948|ng|-
19|K|Potássio|39.098|al|0.82
20|Ca|Cálcio|40.078|at|1.00
21|Sc|Escândio|44.956|tr|1.36
22|Ti|Titânio|47.867|tr|1.54
23|V|Vanádio|50.942|tr|1.63
24|Cr|Cromo|51.996|tr|1.66
25|Mn|Manganês|54.938|tr|1.55
26|Fe|Ferro|55.845|tr|1.83
27|Co|Cobalto|58.933|tr|1.88
28|Ni|Níquel|58.693|tr|1.91
29|Cu|Cobre|63.546|tr|1.90
30|Zn|Zinco|65.38|tr|1.65
31|Ga|Gálio|69.723|pt|1.81
32|Ge|Germânio|72.630|md|2.01
33|As|Arsênio|74.922|md|2.18
34|Se|Selênio|78.971|nm|2.55
35|Br|Bromo|79.904|ha|2.96
36|Kr|Criptônio|83.798|ng|3.00
37|Rb|Rubídio|85.468|al|0.82
38|Sr|Estrôncio|87.62|at|0.95
39|Y|Ítrio|88.906|tr|1.22
40|Zr|Zircônio|91.224|tr|1.33
41|Nb|Nióbio|92.906|tr|1.6
42|Mo|Molibdênio|95.95|tr|2.16
43|Tc|Tecnécio|98|tr|1.9
44|Ru|Rutênio|101.07|tr|2.2
45|Rh|Ródio|102.91|tr|2.28
46|Pd|Paládio|106.42|tr|2.20
47|Ag|Prata|107.87|tr|1.93
48|Cd|Cádmio|112.41|tr|1.69
49|In|Índio|114.82|pt|1.78
50|Sn|Estanho|118.71|pt|1.96
51|Sb|Antimônio|121.76|md|2.05
52|Te|Telúrio|127.60|md|2.1
53|I|Iodo|126.90|ha|2.66
54|Xe|Xenônio|131.29|ng|2.6
55|Cs|Césio|132.91|al|0.79
56|Ba|Bário|137.33|at|0.89
57|La|Lantânio|138.91|la|1.10
58|Ce|Cério|140.12|la|1.12
59|Pr|Praseodímio|140.91|la|1.13
60|Nd|Neodímio|144.24|la|1.14
61|Pm|Promécio|145|la|1.13
62|Sm|Samário|150.36|la|1.17
63|Eu|Európio|151.96|la|1.2
64|Gd|Gadolínio|157.25|la|1.2
65|Tb|Térbio|158.93|la|1.1
66|Dy|Disprósio|162.50|la|1.22
67|Ho|Hólmio|164.93|la|1.23
68|Er|Érbio|167.26|la|1.24
69|Tm|Túlio|168.93|la|1.25
70|Yb|Itérbio|173.05|la|1.1
71|Lu|Lutécio|174.97|la|1.27
72|Hf|Háfnio|178.49|tr|1.3
73|Ta|Tântalo|180.95|tr|1.5
74|W|Tungstênio|183.84|tr|2.36
75|Re|Rênio|186.21|tr|1.9
76|Os|Ósmio|190.23|tr|2.2
77|Ir|Irídio|192.22|tr|2.20
78|Pt|Platina|195.08|tr|2.28
79|Au|Ouro|196.97|tr|2.54
80|Hg|Mercúrio|200.59|tr|2.00
81|Tl|Tálio|204.38|pt|1.62
82|Pb|Chumbo|207.2|pt|2.33
83|Bi|Bismuto|208.98|pt|2.02
84|Po|Polônio|209|md|2.0
85|At|Astato|210|ha|2.2
86|Rn|Radônio|222|ng|2.2
87|Fr|Frâncio|223|al|0.7
88|Ra|Rádio|226|at|0.9
89|Ac|Actínio|227|ac|1.1
90|Th|Tório|232.04|ac|1.3
91|Pa|Protactínio|231.04|ac|1.5
92|U|Urânio|238.03|ac|1.38
93|Np|Netúnio|237|ac|1.36
94|Pu|Plutônio|244|ac|1.28
95|Am|Amerício|243|ac|1.13
96|Cm|Cúrio|247|ac|1.28
97|Bk|Berquélio|247|ac|1.3
98|Cf|Califórnio|251|ac|1.3
99|Es|Einstênio|252|ac|1.3
100|Fm|Férmio|257|ac|1.3
101|Md|Mendelévio|258|ac|1.3
102|No|Nobélio|259|ac|1.3
103|Lr|Laurêncio|266|ac|-
104|Rf|Rutherfórdio|267|tr|-
105|Db|Dúbnio|268|tr|-
106|Sg|Seabórgio|269|tr|-
107|Bh|Bóhrio|270|tr|-
108|Hs|Hássio|277|tr|-
109|Mt|Meitnério|278|tr|-
110|Ds|Darmstácio|281|tr|-
111|Rg|Roentgênio|282|tr|-
112|Cn|Copernício|285|tr|-
113|Nh|Nihônio|286|pt|-
114|Fl|Fleróvio|289|pt|-
115|Mc|Moscóvio|290|pt|-
116|Lv|Livermório|293|pt|-
117|Ts|Tenesso|294|ha|-
118|Og|Oganessônio|294|ng|-`;

const CATS = {
  al: 'Metal alcalino', at: 'Metal alcalino-terroso', tr: 'Metal de transição', pt: 'Metal pós-transição',
  md: 'Semimetal', nm: 'Não metal', ha: 'Halogênio', ng: 'Gás nobre', la: 'Lantanídeo', ac: 'Actinídeo'
};
const CAT_HUE = { al: 6, at: 28, tr: 50, pt: 95, md: 150, nm: 178, ha: 205, ng: 240, la: 280, ac: 320 };
const METAL_CATS = new Set(['al', 'at', 'tr', 'pt', 'la', 'ac']);

const EL = RAW.trim().split('\n').map(l => {
  const [z, sym, name, mass, cat, en] = l.split('|');
  return { z: +z, sym, name, mass: +mass, cat, en: en === '-' ? null : +en };
});
const BY_SYM = {};
EL.forEach(e => { BY_SYM[e.sym] = e; });

const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
const NAME_INDEX = {};
EL.forEach(e => { NAME_INDEX[norm(e.name)] = e; });
const EN_NAMES = { hydrogen: 1, helium: 2, lithium: 3, boron: 5, carbon: 6, nitrogen: 7, oxygen: 8, fluorine: 9, neon: 10, sodium: 11, magnesium: 12, aluminum: 13, aluminium: 13, silicon: 14, phosphorus: 15, sulfur: 16, sulphur: 16, chlorine: 17, argon: 18, potassium: 19, calcium: 20, iron: 26, nickel: 28, copper: 29, zinc: 30, silver: 47, tin: 50, iodine: 53, platinum: 78, gold: 79, mercury: 80, lead: 82, uranium: 92, azoto: 7, wolframio: 74, 'enxofre': 16 };
Object.keys(EN_NAMES).forEach(k => { NAME_INDEX[k] = EL[EN_NAMES[k] - 1]; });

function pos(z) {
  if (z === 1) return { r: 1, c: 1 };
  if (z === 2) return { r: 1, c: 18 };
  if (z <= 4) return { r: 2, c: z - 2 };
  if (z <= 10) return { r: 2, c: z + 8 };
  if (z <= 12) return { r: 3, c: z - 10 };
  if (z <= 18) return { r: 3, c: z };
  if (z <= 36) return { r: 4, c: z - 18 };
  if (z <= 54) return { r: 5, c: z - 36 };
  if (z <= 56) return { r: 6, c: z - 54 };
  if (z <= 70) return { r: 9, c: z - 54 };
  if (z <= 86) return { r: 6, c: z - 68 };
  if (z <= 88) return { r: 7, c: z - 86 };
  if (z <= 102) return { r: 10, c: z - 86 };
  return { r: 7, c: z - 100 };
}
const isF = z => (z >= 57 && z <= 70) || (z >= 89 && z <= 102);
const periodOf = z => { const r = pos(z).r; return r === 9 ? 6 : r === 10 ? 7 : r; };
const blockOf = z => { if (isF(z)) return 'f'; const c = pos(z).c; return (c <= 2 || z === 2) ? 's' : c >= 13 ? 'p' : 'd'; };
const groupOf = z => isF(z) ? null : pos(z).c;
function valenceE(sym, charge = 0) {
  const e = BY_SYM[sym]; const g = pos(e.z).c;
  const ve = (g >= 13 ? g - 10 : g);
  return ve - charge;
}

const ORDER = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'];
const CAP = { s: 2, p: 6, d: 10, f: 14 };
const OVR = { 24: { '4s': 1, '3d': 5 }, 29: { '4s': 1, '3d': 10 }, 41: { '5s': 1, '4d': 4 }, 42: { '5s': 1, '4d': 5 }, 44: { '5s': 1, '4d': 7 }, 45: { '5s': 1, '4d': 8 }, 46: { '5s': 0, '4d': 10 }, 47: { '5s': 1, '4d': 10 }, 57: { '4f': 0, '5d': 1 }, 58: { '4f': 1, '5d': 1 }, 64: { '4f': 7, '5d': 1 }, 78: { '6s': 1, '5d': 9 }, 79: { '6s': 1, '5d': 10 }, 89: { '5f': 0, '6d': 1 }, 90: { '5f': 0, '6d': 2 }, 91: { '5f': 2, '6d': 1 }, 92: { '5f': 3, '6d': 1 }, 93: { '5f': 4, '6d': 1 }, 96: { '5f': 7, '6d': 1 }, 103: { '6d': 0, '7p': 1 } };
function config(z) {
  let left = z; const occ = {};
  for (const o of ORDER) { const c = Math.min(left, CAP[o[1]]); occ[o] = c; left -= c; if (!left) break; }
  if (OVR[z]) Object.assign(occ, OVR[z]);
  return occ;
}
const sortedKeys = occ => Object.keys(occ).filter(k => occ[k] > 0).sort((a, b) => (a[0] - b[0]) || ('spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])));
function configHTML(z) {
  const occ = config(z);
  const nobles = [[86, 'Rn'], [54, 'Xe'], [36, 'Kr'], [18, 'Ar'], [10, 'Ne'], [2, 'He']];
  const core = nobles.find(n => n[0] < z);
  let val = { ...occ }, pre = '';
  if (core) { const co = config(core[0]); for (const k in co) val[k] = (val[k] || 0) - co[k]; pre = `[${core[1]}] `; }
  return pre + sortedKeys(val).map(k => `${k}<sup>${val[k]}</sup>`).join(' ');
}
function shellsOf(z) {
  const occ = config(z), s = [];
  for (const k in occ) { const n = +k[0]; s[n - 1] = (s[n - 1] || 0) + occ[k]; }
  const out = s.map(v => v || 0);
  while (out.length && !out[out.length - 1]) out.pop();
  return out;
}
const SHELL_NAMES = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
const GASES = new Set([1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86]);
function stateOf(z) {
  if (GASES.has(z)) return 'gasoso';
  if (z === 35 || z === 80) return 'líquido';
  if (z === 85 || z === 87 || z >= 99) return 'desconhecido';
  return 'sólido';
}

function parseStrict(s) {
  let i = 0;
  const num = () => { const j = i; while (i < s.length && /\d/.test(s[i])) i++; return i > j ? parseInt(s.slice(j, i), 10) : 1; };
  function group() {
    const m = new Map();
    while (i < s.length && s[i] !== ')') {
      if (s[i] === '(') {
        i++; const inner = group();
        if (s[i] !== ')') throw 0;
        i++; const n = num();
        for (const [k, v] of inner) m.set(k, (m.get(k) || 0) + v * n);
      } else {
        const mm = /^[A-Z][a-z]?/.exec(s.slice(i));
        if (!mm) throw 0;
        let sym = mm[0];
        if (!BY_SYM[sym]) { if (sym.length === 2 && BY_SYM[sym[0]]) sym = sym[0]; else throw 0; }
        i += sym.length;
        const n = num();
        m.set(sym, (m.get(sym) || 0) + n);
      }
    }
    return m;
  }
  try { const r = group(); if (i !== s.length || !r.size) return null; for (const v of r.values()) if (v < 1) return null; return r; } catch (e) { return null; }
}
function segment(run) {
  let best = null, bestZ = Infinity;
  const rec = (k, acc, z) => {
    if (k === run.length) { if (z < bestZ) { bestZ = z; best = acc; } return; }
    for (const len of [1, 2]) {
      const sym = run.slice(k, k + len);
      if (sym.length < len) continue;
      const cap = sym[0].toUpperCase() + sym.slice(1).toLowerCase();
      if (BY_SYM[cap]) rec(k + len, [...acc, cap], z + BY_SYM[cap].z);
    }
  };
  rec(0, [], 0);
  return best;
}
function fixCase(s) {
  let ok = true;
  const out = s.replace(/[A-Za-z]+/g, run => { const seg = segment(run); if (!seg) { ok = false; return run; } return seg.join(''); });
  return ok ? out : null;
}
function cleanInput(raw) {
  return raw.trim().replace(/\s+/g, '').replace(/[₀-₉]/g, c => String(c.charCodeAt(0) - 0x2080)).replace(/[\[{]/g, '(').replace(/[\]}]/g, ')');
}
function parseFormula(raw) {
  const s = cleanInput(raw);
  let m = parseStrict(s);
  if (!m) { const f = fixCase(s); if (f) m = parseStrict(f); }
  return m;
}
function hill(counts) {
  const syms = [...counts.keys()];
  const rest = syms.filter(s => s !== 'C' && s !== 'H').sort();
  const order = counts.has('C') ? ['C', ...(counts.has('H') ? ['H'] : []), ...rest] : syms.slice().sort();
  return order.map(s => s + (counts.get(s) > 1 ? counts.get(s) : '')).join('');
}
const totalAtoms = counts => [...counts.values()].reduce((a, b) => a + b, 0);
const massOf = counts => [...counts].reduce((a, [s, n]) => a + BY_SYM[s].mass * n, 0);

const VALENCES = { H: [1], B: [3], C: [4], N: [3], O: [2], F: [1], Si: [4], P: [3, 5], S: [2, 4, 6], Cl: [1], Br: [1], I: [1] };
function finalizeMol(atoms, bonds) {
  atoms.forEach(a => { a.nb = []; });
  bonds.forEach(b => { atoms[b.a].nb.push({ j: b.b, o: b.o }); atoms[b.b].nb.push({ j: b.a, o: b.o }); });
  atoms.forEach(a => {
    const bs = a.nb.reduce((t, x) => t + x.o, 0);
    const ve = valenceE(a.sym, a.charge || 0);
    a.lp = Math.max(0, Math.floor((ve - bs) / 2));
  });
  return { atoms, bonds };
}
function parseSmiles(smi) {
  const atoms = [], bonds = [], stack = [], rings = {};
  let prev = -1, order = 1, i = 0;
  const add = (sym, charge, bracket) => {
    const idx = atoms.length; atoms.push({ sym, charge, bracket });
    if (prev >= 0) bonds.push({ a: prev, b: idx, o: order });
    prev = idx; order = 1;
  };
  while (i < smi.length) {
    const ch = smi[i];
    if (ch === '(') { stack.push(prev); i++; }
    else if (ch === ')') { prev = stack.pop(); i++; }
    else if (ch === '=') { order = 2; i++; }
    else if (ch === '#') { order = 3; i++; }
    else if (ch === '-') { order = 1; i++; }
    else if (/\d/.test(ch)) {
      if (rings[ch]) { bonds.push({ a: rings[ch].idx, b: prev, o: Math.max(rings[ch].o, order) }); delete rings[ch]; }
      else rings[ch] = { idx: prev, o: order };
      order = 1; i++;
    } else if (ch === '[') {
      const end = smi.indexOf(']', i); const body = smi.slice(i + 1, end);
      const sym = /^[A-Z][a-z]?/.exec(body)[0];
      const plus = (body.match(/\+/g) || []).length, minus = (body.match(/-/g) || []).length;
      add(sym, plus - minus, true); i = end + 1;
    } else {
      const two = smi.substr(i, 2);
      if (two === 'Cl' || two === 'Br' || two === 'Si') { add(two, 0, false); i += 2; } else { add(ch, 0, false); i++; }
    }
  }
  const heavy = atoms.length;
  for (let k = 0; k < heavy; k++) {
    const a = atoms[k]; if (a.bracket) continue;
    const bs = bonds.reduce((t, b) => t + ((b.a === k || b.b === k) ? b.o : 0), 0);
    const vals = VALENCES[a.sym]; if (!vals) continue;
    const v = vals.find(x => x >= bs); if (v === undefined) continue;
    for (let h = 0; h < v - bs; h++) { const idx = atoms.length; atoms.push({ sym: 'H', charge: 0 }); bonds.push({ a: k, b: idx, o: 1 }); }
  }
  return finalizeMol(atoms, bonds);
}
function molCounts(mol) { const m = new Map(); mol.atoms.forEach(a => m.set(a.sym, (m.get(a.sym) || 0) + 1)); return m; }

const DB_RAW = [
  ['O', 'Água'], ['O=C=O', 'Dióxido de carbono'], ['C', 'Metano'], ['N', 'Amônia'],
  ['[H][H]', 'Gás hidrogênio'], ['O=O', 'Gás oxigênio'], ['N#N', 'Gás nitrogênio'], ['FF', 'Gás flúor'],
  ['ClCl', 'Gás cloro'], ['BrBr', 'Bromo'], ['II', 'Iodo'],
  ['Cl', 'Cloreto de hidrogênio'], ['F', 'Fluoreto de hidrogênio'], ['Br', 'Brometo de hidrogênio'],
  ['[C]#[O]', 'Monóxido de carbono'], ['OO', 'Peróxido de hidrogênio (água oxigenada)'],
  ['O=S=O', 'Dióxido de enxofre'], ['O=S(=O)=O', 'Trióxido de enxofre'], ['S', 'Sulfeto de hidrogênio'],
  ['O=O=O', 'Ozônio'], ['C#N', 'Cianeto de hidrogênio'], ['O=[N+]([O-])O', 'Ácido nítrico'],
  ['OS(=O)(=O)O', 'Ácido sulfúrico'], ['OP(=O)(O)O', 'Ácido fosfórico'], ['OC(=O)O', 'Ácido carbônico'],
  ['C#C', 'Etino (acetileno)'], ['C=C', 'Eteno (etileno)'], ['CC', 'Etano'], ['CCC', 'Propano'], ['CCCC', 'Butano'],
  ['C1CCCCC1', 'Cicloexano'], ['CO', 'Metanol'], ['CCO', 'Etanol'], ['CC(=O)O', 'Ácido acético'],
  ['CC(=O)C', 'Acetona'], ['C=O', 'Formaldeído'], ['C(=O)O', 'Ácido fórmico'], ['NC(=O)N', 'Ureia'],
  ['NCC(=O)O', 'Glicina'], ['C1=CC=CC=C1', 'Benzeno'], ['CC1=CC=CC=C1', 'Tolueno'], ['OC1=CC=CC=C1', 'Fenol'],
  ['OCC1OC(O)C(O)C(O)C1O', 'Glicose'], ['CC(=O)OC1=CC=CC=C1C(=O)O', 'Aspirina (ácido acetilsalicílico)'],
  ['CC(=O)NC1=CC=C(O)C=C1', 'Paracetamol'], ['CN1C=NC2=C1C(=O)N(C)C(=O)N2C', 'Cafeína'],
  ['B(F)(F)F', 'Trifluoreto de boro'], ['S(F)(F)(F)(F)(F)F', 'Hexafluoreto de enxofre'],
  ['P(Cl)(Cl)(Cl)(Cl)Cl', 'Pentacloreto de fósforo'], ['P(Cl)(Cl)Cl', 'Tricloreto de fósforo'],
  ['O=C=S', 'Sulfeto de carbonila'], ['B(Br)(Br)Br', 'Tribrometo de boro'], ['C(Cl)(Cl)(Cl)Cl', 'Tetracloreto de carbono'], ['C(Cl)(Cl)Cl', 'Clorofórmio'], ['P', 'Fosfina'], ['Si', 'Silano']
];
const DB = {};
DB_RAW.forEach(([smi, name]) => { const mol = parseSmiles(smi); DB[hill(molCounts(mol))] = { smi, name, mol }; });
const NAMES_ONLY = {};
Object.entries({ NaCl: 'Cloreto de sódio (sal de cozinha)', KCl: 'Cloreto de potássio', LiF: 'Fluoreto de lítio', NaF: 'Fluoreto de sódio', LiCl: 'Cloreto de lítio', KBr: 'Brometo de potássio', NaBr: 'Brometo de sódio', KI: 'Iodeto de potássio', NaI: 'Iodeto de sódio', MgO: 'Óxido de magnésio', CaO: 'Óxido de cálcio', NaOH: 'Hidróxido de sódio (soda cáustica)', KOH: 'Hidróxido de potássio', CaCO3: 'Carbonato de cálcio', NaHCO3: 'Bicarbonato de sódio', Fe2O3: 'Óxido de ferro(III) (ferrugem)', CaCl2: 'Cloreto de cálcio', Al2O3: 'Óxido de alumínio', SiO2: 'Dióxido de silício (sílica)' }).forEach(([f, n]) => { NAMES_ONLY[hill(parseFormula(f))] = n; });
const ALIASES = { agua: 'H2O', water: 'H2O', metano: 'CH4', amonia: 'NH3', amoniaco: 'NH3', etanol: 'C2H5OH', alcool: 'C2H5OH', glicose: 'C6H12O6', glucose: 'C6H12O6', sal: 'NaCl', 'sal de cozinha': 'NaCl', benzeno: 'C6H6', ozonio: 'O3', acetona: 'C3H6O', aspirina: 'C9H8O4', cafeina: 'C8H10N4O2', paracetamol: 'C8H9NO2', ureia: 'CH4N2O', 'gas carbonico': 'CO2', 'agua oxigenada': 'H2O2', 'acido acetico': 'CH3COOH', 'acido sulfurico': 'H2SO4', 'soda caustica': 'NaOH', 'bicarbonato de sodio': 'NaHCO3', 'cal': 'CaO' };
Object.keys(DB).forEach(k => { const nm = norm(DB[k].name.split('(')[0]); ALIASES[nm] = ALIASES[nm] || k; });
const COMPOUND_NAME = key => (DB[key] && DB[key].name) || NAMES_ONLY[key] || null;

function resolve(raw) {
  const q = raw.trim();
  if (!q) return { kind: 'error' };
  if (/^\d{1,3}$/.test(q) && +q >= 1 && +q <= 118) return { kind: 'element', el: EL[+q - 1] };
  if (BY_SYM[q]) return { kind: 'element', el: BY_SYM[q] };
  const byName = NAME_INDEX[norm(q)];
  if (byName) return { kind: 'element', el: byName };
  if (/^[a-z]{1,2}$/.test(q)) {
    const cap = q[0].toUpperCase() + q.slice(1).toLowerCase();
    if (BY_SYM[cap]) {
      const up = parseStrict(q.toUpperCase());
      const hint = (up && up.size >= 2 && [...up.keys()].reduce((t, k) => t + BY_SYM[k].z, 0) <= 40) ? `Interpretei "${q}" como o elemento ${BY_SYM[cap].name}. Para o composto, digite ${q.toUpperCase()}.` : null;
      return { kind: 'element', el: BY_SYM[cap], hint };
    }
  }
  let formulaText = q;
  const alias = ALIASES[norm(q)];
  if (alias) formulaText = alias;
  const counts = parseFormula(formulaText);
  if (!counts) return { kind: 'error' };
  if (counts.size === 1 && totalAtoms(counts) === 1) return { kind: 'element', el: BY_SYM[[...counts.keys()][0]] };
  return { kind: 'compound', counts, key: hill(counts) };
}

const COV = { H: .31, He: .28, Li: 1.28, Be: .96, B: .84, C: .76, N: .71, O: .66, F: .57, Ne: .58, Na: 1.66, Mg: 1.41, Al: 1.21, Si: 1.11, P: 1.07, S: 1.05, Cl: 1.02, Ar: 1.06, K: 2.03, Ca: 1.76, Fe: 1.32, Cu: 1.32, Zn: 1.22, Br: 1.20, I: 1.39, Xe: 1.40, Ag: 1.45, Au: 1.36, Hg: 1.32, Pb: 1.46 };
const cov = sym => COV[sym] || Math.min(2.2, 1 + .25 * (periodOf(BY_SYM[sym].z) - 2));
const bondLen = (a, b, o) => (cov(a) + cov(b)) * (o === 1 ? 1 : o === 2 ? .9 : .8);
const v3 = {
  sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
  len: a => Math.hypot(a[0], a[1], a[2]),
  dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
  cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
  sc: (a, k) => [a[0] * k, a[1] * k, a[2] * k],
  norm: a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
};
function rng(seed) {
  let s = (seed * 2654435761) >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function relax(mol, seed) {
  const A = mol.atoms, n = A.length, rnd = rng(seed);
  const rdir = () => v3.norm([rnd() * 2 - 1, rnd() * 2 - 1, rnd() * 2 - 1]);
  const BL = mol.bonds.map(b => bondLen(A[b.a].sym, A[b.b].sym, b.o));
  const P = A.map(() => [0, 0, 0]);
  const seen = new Array(n).fill(false); seen[0] = true;
  const q = [0];
  while (q.length) {
    const u = q.shift();
    for (const { j, o } of A[u].nb) {
      if (seen[j]) continue;
      const L = bondLen(A[u].sym, A[j].sym, o);
      let best = null, bs = -1;
      for (let t = 0; t < 14; t++) {
        const d = rdir(), c = [P[u][0] + d[0] * L, P[u][1] + d[1] * L, P[u][2] + d[2] * L];
        let m = 1e9;
        for (let k = 0; k < n; k++) if (seen[k] && k !== u) m = Math.min(m, v3.len(v3.sub(c, P[k])));
        if (m > bs) { bs = m; best = c; }
      }
      P[j] = best; seen[j] = true; q.push(j);
    }
  }
  const LP = A.map(a => Array.from({ length: a.lp }, rdir));
  const excl = new Set();
  const mark = (i, j) => { excl.add(i * n + j); excl.add(j * n + i); };
  A.forEach((a, i) => { a.nb.forEach(x => { mark(i, x.j); a.nb.forEach(y => { if (x.j !== y.j) mark(x.j, y.j); }); }); });
  const dbl = mol.bonds.filter(b => b.o === 2).map(b => ({ a: b.a, b: b.b, SA: A[b.a].nb.map(x => x.j).filter(j => j !== b.b), SB: A[b.b].nb.map(x => x.j).filter(j => j !== b.a) })).filter(d => d.SA.length && d.SB.length);
  const vdw = A.map(a => cov(a.sym) + .95);
  const ITERS = 700; let E = 0;
  for (let it = 0; it < ITERS; it++) {
    const F = P.map(() => [0, 0, 0]); E = 0;
    const step = .22 * (1 - it / ITERS) + .04;
    mol.bonds.forEach((b, k) => {
      const d = v3.sub(P[b.b], P[b.a]), r = v3.len(d) || 1e-6, e = r - BL[k]; E += e * e;
      const f = v3.sc(d, 1.2 * e / r);
      for (let c = 0; c < 3; c++) { F[b.a][c] += f[c]; F[b.b][c] -= f[c]; }
    });
    for (let c = 0; c < n; c++) {
      const a = A[c]; if (a.nb.length < 2) continue;
      const dom = a.nb.map(x => { const v = v3.sub(P[x.j], P[c]); const r = v3.len(v) || 1e-6; return { u: v3.sc(v, 1 / r), r, j: x.j }; });
      for (let m = 0; m < a.lp; m++) dom.push({ u: LP[c][m], r: 0, j: -1, m });
      const G = dom.map(() => [0, 0, 0]);
      for (let x = 0; x < dom.length; x++) for (let y = x + 1; y < dom.length; y++) {
        const d = v3.sub(dom[x].u, dom[y].u), r2 = v3.dot(d, d) + 1e-6;
        const nl = (dom[x].j < 0) + (dom[y].j < 0), w = nl === 2 ? 1.7 : nl === 1 ? 1.2 : 1;
        const co = w / (r2 * Math.sqrt(r2)); E += w / Math.sqrt(r2);
        for (let k = 0; k < 3; k++) { G[x][k] += co * d[k]; G[y][k] -= co * d[k]; }
      }
      dom.forEach((d, x) => {
        const g = G[x], t = v3.sub(g, v3.sc(d.u, v3.dot(g, d.u)));
        if (d.j >= 0) { const s = .5 / d.r; for (let k = 0; k < 3; k++) { F[d.j][k] += s * t[k]; F[c][k] -= s * t[k]; } }
        else { LP[c][d.m] = v3.norm([d.u[0] + .25 * t[0], d.u[1] + .25 * t[1], d.u[2] + .25 * t[2]]); }
      });
    }
    for (const d of dbl) {
      const nrm0 = v3.cross(v3.sub(P[d.b], P[d.a]), v3.sub(P[d.SA[0]], P[d.a])); const nl = v3.len(nrm0); if (nl < 1e-6) continue;
      const nrm = v3.sc(nrm0, 1 / nl);
      for (const s of [...d.SA.slice(1), ...d.SB]) { const h = v3.dot(v3.sub(P[s], P[d.a]), nrm); E += h * h; for (let k = 0; k < 3; k++) F[s][k] -= .5 * h * nrm[k]; }
    }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      if (excl.has(i * n + j)) continue;
      const d = v3.sub(P[j], P[i]), r = v3.len(d) || 1e-6, dmin = .7 * (vdw[i] + vdw[j]);
      if (r < dmin) { const e = dmin - r; E += e * e; const f = v3.sc(d, .6 * e / r); for (let k = 0; k < 3; k++) { F[i][k] -= f[k]; F[j][k] += f[k]; } }
    }
    for (let i = 0; i < n; i++) {
      let m = v3.len(F[i]) * step; const s = m > .15 ? .15 / m : 1;
      for (let k = 0; k < 3; k++) P[i][k] += F[i][k] * step * s;
    }
  }
  const c = [0, 1, 2].map(k => P.reduce((t, p) => t + p[k], 0) / n);
  return { P: P.map(p => [p[0] - c[0], p[1] - c[1], p[2] - c[2]]), E };
}
const embedCache = {};
function embed(mol, key) {
  if (key && embedCache[key]) return embedCache[key];
  let best = null;
  const tries = mol.atoms.some(a => a.lp >= 2 && a.nb.length >= 4) ? 12 : 5;
  for (let s = 1; s <= tries; s++) { const r = relax(mol, s); if (!best || r.E < best.E) best = r; }
  if (key) embedCache[key] = best.P;
  return best.P;
}

const GEOM = { '2,0': ['linear', 180], '3,0': ['trigonal plana', 120], '3,1': ['angular', 119], '4,0': ['tetraédrica', 109.5], '4,1': ['piramidal trigonal', 107], '4,2': ['angular', 104.5], '5,0': ['bipirâmide trigonal', null], '5,1': ['gangorra', null], '5,2': ['em forma de T', null], '5,3': ['linear', 180], '6,0': ['octaédrica', 90], '6,1': ['piramidal quadrada', 90], '6,2': ['quadrada planar', 90] };
function describeGeometry(mol) {
  if (mol.atoms.length === 2) return { name: 'linear (diatômica)', angle: null };
  const centers = mol.atoms.filter(a => a.nb.length >= 2);
  if (centers.length !== 1) return null;
  const c = centers[0], g = GEOM[`${c.nb.length + c.lp},${c.lp}`];
  return g ? { name: g[0], angle: g[1] } : null;
}

function buildModel(counts, key) {
  if (totalAtoms(counts) > 150) return { tooBig: true };
  const entry = DB[key];
  if (entry) {
    const P = embed(entry.mol, key);
    return { mode: 'Bola e vareta', atoms: entry.mol.atoms.map((a, i) => ({ sym: a.sym, p: P[i] })), bonds: entry.mol.bonds, mol: entry.mol, kind: 'mol',
      note: 'As posições vêm de uma simulação VSEPR simples: os pares de elétrons se repelem e definem os ângulos. Moléculas reais variam um pouco.' };
  }
  const els = [...counts.keys()];
  if (els.length === 2 && counts.get(els[0]) === counts.get(els[1])) {
    const [a, b] = els.map(s => BY_SYM[s]);
    const metal = METAL_CATS.has(a.cat) ? a : METAL_CATS.has(b.cat) ? b : null;
    const non = metal === a ? b : a;
    if (metal && (non.cat === 'ha' || non.cat === 'nm')) {
      const atoms = [], N = 4, s = 2.6;
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) for (let k = 0; k < N; k++) {
        const isMetal = (i + j + k) % 2 === 0;
        atoms.push({ sym: isMetal ? metal.sym : non.sym, p: [(i - 1.5) * s, (j - 1.5) * s, (k - 1.5) * s], rad: isMetal ? .5 : .95 });
      }
      return { mode: 'Rede cristalina', atoms, bonds: [], kind: 'lattice',
        note: 'Fragmento 4×4×4 de uma rede iônica com cátions e ânions alternados (arranjo do tipo sal de cozinha). É ilustrativo: nem todo sal 1:1 cristaliza assim.' };
    }
  }
  if (els.length === 2) {
    const cs = els.find(s => counts.get(s) === 1), ts = els.find(s => s !== cs), n = counts.get(ts);
    if (cs && ts && n >= 2 && n <= 6 && ['H', 'F', 'Cl', 'Br', 'I'].includes(ts) && ['nm', 'md', 'ha', 'ng', 'pt'].includes(BY_SYM[cs].cat)) {
      const atoms = [{ sym: cs, charge: 0 }], bonds = [];
      for (let i = 0; i < n; i++) { atoms.push({ sym: ts, charge: 0 }); bonds.push({ a: 0, b: i + 1, o: 1 }); }
      const mol = finalizeMol(atoms, bonds), P = embed(mol, 'guess:' + key);
      return { mode: 'Bola e vareta', atoms: atoms.map((a, i) => ({ sym: a.sym, p: P[i] })), bonds, mol, kind: 'guess',
        note: 'Não tenho esta molécula cadastrada. A forma é uma previsão do modelo VSEPR (átomo central + pares livres) e pode diferir da real.' };
    }
  }
  const n = totalAtoms(counts), list = [];
  counts.forEach((c, s) => { for (let i = 0; i < c; i++) list.push(s); });
  const R = 1.2 * Math.cbrt(n) + 0.6;
  const atoms = list.map((sym, i) => {
    const y = n === 1 ? 0 : 1 - 2 * (i + .5) / n, r = Math.sqrt(1 - y * y), th = i * 2.399963;
    return { sym, p: [R * r * Math.cos(th), R * y, R * r * Math.sin(th)] };
  });
  return { mode: 'Átomos agrupados', atoms, bonds: [], kind: 'cluster',
    note: 'Ainda não tenho a estrutura 3D exata desta fórmula. Os átomos aparecem agrupados, sem ligações, só para mostrar quais e quantos são.' };
}

const CPK = { H: '#FFFFFF', He: '#D9FFFF', Li: '#CC80FF', Be: '#C2FF00', B: '#FFB5B5', C: '#909090', N: '#3050F8', O: '#FF0D0D', F: '#90E050', Ne: '#B3E3F5', Na: '#AB5CF2', Mg: '#8AFF00', Al: '#BFA6A6', Si: '#F0C8A0', P: '#FF8000', S: '#FFFF30', Cl: '#1FF01F', Ar: '#80D1E3', K: '#8F40D4', Ca: '#3DFF00', Ti: '#BFC2C7', Cr: '#8A99C7', Mn: '#9C7AC7', Fe: '#E06633', Co: '#F090A0', Ni: '#50D050', Cu: '#C88033', Zn: '#7D80B0', Br: '#A62929', Kr: '#5CB8D1', Ag: '#C0C0C0', I: '#940094', Xe: '#429EB0', Au: '#FFD123', Hg: '#B8B8D0', Pb: '#575961', U: '#008FFF' };
const colorOf = sym => CPK[sym] || `hsl(${CAT_HUE[BY_SYM[sym].cat]}, 55%, 62%)`;

const Stage = (() => {
  const host = document.getElementById('stage'), canvas = document.getElementById('gl'), msg = document.getElementById('stageMsg');
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ok = false, renderer, scene, camera, root, auto = !reduce, zoom = 1, baseDist = 10, frameR = 3, dragging = false;
  let anim = [], junk = [];
  const mats = new Map();
  let sphereGeo, cylGeo, nucGeo;

  const mat = c => { if (!mats.has(c)) mats.set(c, new THREE.MeshStandardMaterial({ color: new THREE.Color(c), roughness: .38, metalness: .05 })); return mats.get(c); };
  const track = o => { junk.push(o); return o; };

  function init() {
    if (typeof THREE === 'undefined') { msg.textContent = 'Não foi possível carregar a biblioteca 3D. As informações continuam disponíveis.'; msg.hidden = false; return; }
    try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); }
    catch (e) { msg.textContent = 'Este navegador não permitiu o gráfico 3D (WebGL). As informações continuam disponíveis.'; msg.hidden = false; return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(38, 1, .1, 500);
    scene.add(new THREE.AmbientLight(0xffffff, .6));
    const k = new THREE.DirectionalLight(0xffffff, .95); k.position.set(4, 6, 8); scene.add(k);
    const f = new THREE.DirectionalLight(0x8fb0ff, .35); f.position.set(-6, -3, -4); scene.add(f);
    root = new THREE.Group(); scene.add(root);
    sphereGeo = new THREE.SphereGeometry(1, 28, 18);
    nucGeo = new THREE.SphereGeometry(1, 12, 8);
    cylGeo = new THREE.CylinderGeometry(1, 1, 1, 10, 1);
    new ResizeObserver(resize).observe(host); resize();
    bindPointer();
    ok = true;
    let last = performance.now();
    const loop = t => {
      requestAnimationFrame(loop);
      const dt = Math.min(.05, (t - last) / 1000); last = t;
      if (auto && !dragging) root.rotation.y += dt * .3;
      if (!reduce) anim.forEach(fn => fn(dt));
      camera.position.z += (baseDist * zoom - camera.position.z) * .15;
      renderer.render(scene, camera);
    };
    requestAnimationFrame(loop);
  }
  function resize() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); fit();
  }
  function fit() {
    const v = camera.fov * Math.PI / 360, hh = Math.atan(Math.tan(v) * camera.aspect);
    baseDist = (frameR * 1.18) / Math.tan(Math.min(v, hh));
  }
  function bindPointer() {
    const ptrs = new Map(); let pinch = 0;
    canvas.addEventListener('pointerdown', e => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); dragging = true; if (ptrs.size === 2) pinch = 0; });
    canvas.addEventListener('pointermove', e => {
      if (!ptrs.has(e.pointerId)) return;
      const old = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptrs.size === 1) { root.rotation.y += (e.clientX - old[0]) * .01; root.rotation.x += (e.clientY - old[1]) * .01; }
      else if (ptrs.size === 2) {
        const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
        if (pinch) zoom = Math.min(2.5, Math.max(.35, zoom * pinch / d)); pinch = d;
      }
    });
    const up = e => { ptrs.delete(e.pointerId); if (!ptrs.size) dragging = false; pinch = 0; };
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', e => { e.preventDefault(); zoom = Math.min(2.5, Math.max(.35, zoom * Math.exp(e.deltaY * .001))); }, { passive: false });
  }
  function clear() {
    if (!ok) return;
    while (root.children.length) root.remove(root.children[0]);
    junk.forEach(o => o.dispose && o.dispose()); junk = []; anim = [];
    msg.hidden = true;
  }
  function frame(R) { frameR = R; fit(); zoom = 1; root.rotation.set(.35, -.5, 0); }
  function label(text, size) {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d');
    g.font = '700 64px "IBM Plex Sans", "Segoe UI", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 10; g.strokeStyle = 'rgba(8,14,20,.9)'; g.strokeText(text, 64, 68); g.fillStyle = '#fff'; g.fillText(text, 64, 68);
    const tex = track(new THREE.CanvasTexture(c)), m = track(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
    const s = new THREE.Sprite(m); s.scale.set(size, size, 1); s.renderOrder = 10; return s;
  }
  function stick(p, q, r, color, parent) {
    const a = new THREE.Vector3(...p), b = new THREE.Vector3(...q), d = b.clone().sub(a), L = d.length();
    const m = new THREE.Mesh(cylGeo, mat(color));
    m.position.copy(a.clone().add(b).multiplyScalar(.5)); m.scale.set(r, L, r);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); parent.add(m);
  }

  function showAtom(el) {
    if (!ok) return; clear();
    const Z = el.z, N = Math.max(0, Math.round(el.mass) - Z), A = Z + N, rn = .3;
    const Rn = A > 1 ? rn * Math.cbrt(A / .55) : 0;
    let acc = 0;
    for (let i = 0; i < A; i++) {
      const u = (i + .5) / A, r = Rn * Math.cbrt(u), y = 1 - 2 * u, rad = Math.sqrt(1 - y * y), th = i * 2.399963;
      acc += Z; const proton = acc >= A; if (proton) acc -= A;
      const m = new THREE.Mesh(nucGeo, mat(proton ? '#E5533D' : '#8FA3B5'));
      m.position.set(r * rad * Math.cos(th), r * y, r * rad * Math.sin(th)); m.scale.setScalar(rn); root.add(m);
    }
    const shells = shellsOf(Z), R1 = Math.max(1.5, Rn + rn + .9);
    const tilts = [[0, 0], [1.05, .3], [-.9, .9], [.4, -1.3], [1.3, 1.6], [-.5, .2], [.8, -.7]];
    shells.forEach((cnt, k) => {
      const R = R1 + k * .95, pivot = new THREE.Group(); pivot.rotation.set(tilts[k][0], tilts[k][1], 0);
      const pts = []; for (let i = 0; i < 128; i++) { const a = i / 128 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0)); }
      const lg = track(new THREE.BufferGeometry().setFromPoints(pts)), lm = track(new THREE.LineBasicMaterial({ color: 0x9fb6c8, transparent: true, opacity: .32 }));
      pivot.add(new THREE.LineLoop(lg, lm));
      const orbit = new THREE.Group(); pivot.add(orbit);
      const outer = k === shells.length - 1, em = mat(outer ? '#FFC247' : '#5CC8FF');
      for (let i = 0; i < cnt; i++) { const a = i / cnt * Math.PI * 2, e = new THREE.Mesh(sphereGeo, em); e.scale.setScalar(.14); e.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); orbit.add(e); }
      const sp = 1.3 / Math.pow(k + 1, .7);
      anim.push(dt => { orbit.rotation.z += dt * sp; });
      root.add(pivot);
    });
    frame(R1 + (shells.length - 1) * .95 + .4);
  }

  function showModel(m) {
    if (!ok) return; clear();
    if (m.tooBig) { msg.textContent = 'São átomos demais para o modelo 3D (limite de 150). As informações ao lado continuam valendo.'; msg.hidden = false; return; }
    const atoms = m.atoms; let R = 1;
    const showH = atoms.length <= 14;
    atoms.forEach(a => {
      const rad = a.rad || (.18 + .4 * cov(a.sym));
      const s = new THREE.Mesh(sphereGeo, mat(colorOf(a.sym))); s.scale.setScalar(rad); s.position.set(...a.p); root.add(s);
      R = Math.max(R, Math.hypot(...a.p) + rad);
      if (a.sym !== 'H' || showH) { const lb = label(a.sym, Math.max(.5, rad * 1.25)); lb.position.set(...a.p); root.add(lb); }
    });
    m.bonds.forEach(b => {
      const pa = atoms[b.a].p, pb = atoms[b.b].p, mid = [(pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2, (pa[2] + pb[2]) / 2];
      const d = new THREE.Vector3(pb[0] - pa[0], pb[1] - pa[1], pb[2] - pa[2]).normalize();
      const ref = Math.abs(d.y) < .9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
      const perp = new THREE.Vector3().crossVectors(d, ref).normalize();
      const offs = b.o === 1 ? [0] : b.o === 2 ? [-.1, .1] : [-.17, 0, .17], r = b.o === 1 ? .09 : .065;
      offs.forEach(o => {
        const dx = perp.x * o, dy = perp.y * o, dz = perp.z * o;
        stick([pa[0] + dx, pa[1] + dy, pa[2] + dz], [mid[0] + dx, mid[1] + dy, mid[2] + dz], r, colorOf(atoms[b.a].sym), root);
        stick([mid[0] + dx, mid[1] + dy, mid[2] + dz], [pb[0] + dx, pb[1] + dy, pb[2] + dz], r, colorOf(atoms[b.b].sym), root);
      });
    });
    frame(R + .3);
  }
  return {
    init, showAtom, showModel,
    toggleSpin() { auto = !auto; return auto; },
    reset() { if (ok) { zoom = 1; root.rotation.set(.35, -.5, 0); } },
    get spinning() { return auto; }
  };
})();

const $ = id => document.getElementById(id);
const fmt = (n, d = 3) => n.toLocaleString('pt-BR', { maximumFractionDigits: d });
const input = $('q'), infoEl = $('info'), legendEl = $('legend'), noteEl = $('note'), tagEl = $('stageTag'), hintEl = $('hint');

function formulaHTML(counts) { return [...counts].map(([s, n]) => s + (n > 1 ? `<sub>${n}</sub>` : '')).join(''); }

function renderElement(el) {
  const z = el.z, p = pos(z), N = Math.max(0, Math.round(el.mass) - z), sh = shellsOf(z), per = periodOf(z), grp = groupOf(z);
  const h = CAT_HUE[el.cat];
  infoEl.innerHTML = `
    <div class="head">
      <div class="tile" style="--h:${h}"><span class="z">${z}</span><span class="sym">${el.sym}</span><span class="m">${fmt(el.mass, 4)}</span></div>
      <div class="titles"><h2>${el.name}</h2><span class="catline" style="--h:${h}"><i></i>${CATS[el.cat]}</span></div>
    </div>
    <dl class="facts">
      <div><dt>Número atômico</dt><dd>${z}</dd></div>
      <div><dt>Massa atômica</dt><dd>${fmt(el.mass, 4)} u</dd></div>
      <div><dt>Prótons / elétrons</dt><dd>${z} / ${z}</dd></div>
      <div><dt>Nêutrons (≈)</dt><dd>${N}</dd></div>
      <div><dt>Grupo</dt><dd>${grp || '—'}</dd></div>
      <div><dt>Período</dt><dd>${per}</dd></div>
      <div><dt>Bloco</dt><dd>${blockOf(z)}</dd></div>
      <div><dt>Eletronegatividade</dt><dd>${el.en === null ? '—' : fmt(el.en, 2)}</dd></div>
      <div><dt>Estado a 25 °C</dt><dd>${stateOf(z)}</dd></div>
      <div><dt>Camada externa</dt><dd>${sh[sh.length - 1]} elétron${sh[sh.length - 1] === 1 ? '' : 's'}</dd></div>
      <div class="wide cfg"><dt>Distribuição eletrônica</dt><dd>${configHTML(z)}</dd></div>
      <div class="wide"><dt>Elétrons por camada (${SHELL_NAMES.slice(0, sh.length).join(' ')})</dt><dd>${sh.join(', ')}</dd></div>
    </dl>`;
  tagEl.textContent = 'Modelo de Bohr';
  legendEl.innerHTML = `<span><i style="background:#E5533D"></i>${z} próton${z > 1 ? 's' : ''}</span><span><i style="background:#8FA3B5"></i>${N} nêutron${N === 1 ? '' : 's'}</span><span><i style="background:#5CC8FF"></i>${z - sh[sh.length - 1]} elétrons internos</span><span><i style="background:#FFC247"></i>${sh[sh.length - 1]} na camada externa</span>`;
  noteEl.textContent = 'Modelo de Bohr simplificado: os elétrons reais ocupam orbitais, não órbitas. O número de nêutrons é aproximado, a partir da massa atômica.' + (z >= 104 ? ' Este elemento é sintético e suas propriedades são previstas.' : '');
  Stage.showAtom(el);
  markTable(new Set([el.sym]), el.sym);
}

function renderCompound(r) {
  const { counts, key } = r, name = COMPOUND_NAME(key), mass = massOf(counts), total = totalAtoms(counts);
  const model = buildModel(counts, key);
  const els = [...counts.keys()].map(s => BY_SYM[s]);
  const hasMetal = els.some(e => METAL_CATS.has(e.cat)), hasNon = els.some(e => !METAL_CATS.has(e.cat));
  const type = hasMetal && hasNon ? 'Iônico (previsto)' : hasMetal ? 'Metálico' : 'Molecular (covalente)';
  let geo = null, bondsTxt = null;
  if (model.mol) {
    geo = describeGeometry(model.mol);
    const c = { 1: 0, 2: 0, 3: 0 }; model.bonds.forEach(b => c[b.o]++);
    bondsTxt = [c[1] && `${c[1]} simples`, c[2] && `${c[2]} dupla${c[2] > 1 ? 's' : ''}`, c[3] && `${c[3]} tripla${c[3] > 1 ? 's' : ''}`].filter(Boolean).join(', ');
  }
  const rows = [...counts].map(([s, n]) => { const e = BY_SYM[s], pct = BY_SYM[s].mass * n / mass * 100; return `<div class="bar-row" style="--h:${CAT_HUE[e.cat]}"><span class="lab">${s} · ${e.name}</span><span class="track"><span class="fill" style="display:block;width:${pct.toFixed(1)}%"></span></span><span class="pct">${fmt(pct, 1)}%</span></div>`; }).join('');
  infoEl.innerHTML = `
    <div class="titles"><div class="formula">${formulaHTML(counts)}</div>${name ? `<h2 style="font-size:1.25rem">${name}</h2>` : ''}</div>
    <dl class="facts">
      <div><dt>Massa molar</dt><dd>${fmt(mass, 3)} g/mol</dd></div>
      <div><dt>Átomos</dt><dd>${total}</dd></div>
      <div><dt>Elementos</dt><dd>${counts.size}</dd></div>
      <div><dt>Tipo</dt><dd>${type}</dd></div>
      ${geo ? `<div class="${geo.angle ? '' : 'wide'}"><dt>Geometria</dt><dd>${geo.name}</dd></div>` : ''}
      ${geo && geo.angle ? `<div><dt>Ângulo ideal</dt><dd>≈ ${fmt(geo.angle, 1)}°</dd></div>` : ''}
      ${bondsTxt ? `<div class="wide"><dt>Ligações</dt><dd>${bondsTxt}</dd></div>` : ''}
    </dl>
    <div><p class="sec-title">Composição em massa</p><div class="bars">${rows}</div></div>`;
  tagEl.textContent = model.mode || 'Modelo 3D';
  noteEl.textContent = model.note || '';
  const used = {}; (model.atoms || []).forEach(a => { used[a.sym] = (used[a.sym] || 0) + 1; });
  legendEl.innerHTML = Object.keys(used).map(s => `<span><i style="background:${colorOf(s).startsWith('hsl') ? colorOf(s) : colorOf(s)}"></i>${s} · ${BY_SYM[s].name} (${used[s]})</span>`).join('');
  Stage.showModel(model);
  markTable(new Set(counts.keys()), null);
}

function renderError(q) {
  const safe = q.replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
  infoEl.innerHTML = `<div class="err"><h2>Não reconheci "${safe}"</h2><p>Tente um símbolo (Fe), um nome (ouro), um número atômico (26) ou uma fórmula (H2O, Ca(OH)2, C6H12O6). Maiúsculas e minúsculas importam em fórmulas: CO é monóxido de carbono, Co é o cobalto.</p></div>`;
}

function run(raw) {
  const r = resolve(raw);
  hintEl.hidden = true;
  if (r.kind === 'error') { renderError(raw.trim()); return; }
  if (r.hint) { hintEl.textContent = r.hint; hintEl.hidden = false; }
  if (r.kind === 'element') renderElement(r.el); else renderCompound(r);
}

const cells = {};
(function buildTable() {
  const grid = $('pgrid');
  EL.forEach(e => {
    const p = pos(e.z), b = document.createElement('button');
    b.type = 'button'; b.className = `cell c-${e.cat}`; b.style.gridRow = p.r; b.style.gridColumn = p.c;
    b.title = `${e.name} (${e.z})`; b.setAttribute('aria-label', `${e.name}, número ${e.z}`);
    b.innerHTML = `<span class="n">${e.z}</span><span class="s">${e.sym}</span>`;
    b.addEventListener('click', () => { input.value = e.sym; run(e.sym); $('result').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    grid.appendChild(b); cells[e.sym] = b;
  });
  [['Lantanídeos', 9], ['Actinídeos', 10]].forEach(([t, r]) => { const d = document.createElement('div'); d.className = 'rowlab'; d.style.gridRow = r; d.style.gridColumn = '1 / 3'; d.textContent = t; grid.appendChild(d); });
  $('cats').innerHTML = Object.keys(CATS).map(k => `<span style="--h:${CAT_HUE[k]}"><i></i>${CATS[k]}</span>`).join('');
})();
function markTable(set, main) {
  for (const s in cells) { cells[s].classList.toggle('on', set.has(s)); cells[s].classList.toggle('main', s === main); }
}

$('form').addEventListener('submit', e => { e.preventDefault(); run(input.value); });
$('examples').innerHTML = ['H', 'He', 'C', 'Fe', 'Au', 'H2O', 'CO2', 'CH4', 'NH3', 'NaCl', 'C2H5OH', 'C6H12O6', 'C6H6', 'C8H10N4O2', 'COS', 'H2S', 'BBr3', 'PH3', 'CCl4'].map(s => `<button type="button" class="chip">${s}</button>`).join('');
$('examples').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) { input.value = b.textContent; run(b.textContent); } });
const spinBtn = $('btnSpin');
spinBtn.addEventListener('click', () => { spinBtn.setAttribute('aria-pressed', String(Stage.toggleSpin())); });
$('btnReset').addEventListener('click', () => Stage.reset());

Stage.init();
spinBtn.setAttribute('aria-pressed', String(Stage.spinning));
run(input.value);