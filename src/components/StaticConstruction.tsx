/** Local vector alternative: no WebGL, network dependency, animation or model download. */
export default function StaticConstruction() {
  return <svg className="static-construction" viewBox="0 0 800 620" role="img" aria-labelledby="static-title static-description">
    <title id="static-title">Architectural wall assembly illustration</title>
    <desc id="static-description">A cutaway wall with steel framing, timber noggins, battens and a red window surround. Illustrative construction sequence, not a project photograph.</desc>
    <defs><pattern id="diagram-grid" width="40" height="20" patternUnits="userSpaceOnUse" patternTransform="matrix(1 .4 -1 .4 400 200)"><path d="M40 0H0v20" fill="none" stroke="#d7d5cf" strokeWidth="1" /></pattern><linearGradient id="wall" x2="1" y2="1"><stop stopColor="#e6e4df" /><stop offset="1" stopColor="#bbbcb7" /></linearGradient></defs>
    <ellipse cx="420" cy="494" rx="305" ry="60" fill="#dedbd4" opacity=".5" />
    <path d="m90 420 240-150 400 160-240 150Z" fill="url(#diagram-grid)" />
    <path d="m170 419 320 125 168-100-321-126Z" fill="#c6c3bb" /><path d="m170 419 320 125v14L170 433Z" fill="#a4a29c" />
    <g stroke="#838b89" strokeWidth="9" strokeLinejoin="miter"><path d="m190 413 300 115 148-88V204L339 89 190 177Z" fill="none" /><path d="m190 177 300 115v236M240 195v237m50-218v237m50-218v237m50-218v237m50-218v237M490 292l148-88m-98 58v236m49-266v236" fill="none" /></g>
    <g stroke="#ac8258" strokeWidth="13"><path d="m192 295 48 18m4 2 46 17m4 2 46 17m4 1 46 18m4 1 46 18m4 1 46 18" /></g>
    <path d="m339 89 299 115v236l-299-115Z" fill="url(#wall)" opacity=".93" />
    <g stroke="#999e99" strokeWidth="1"><path d="m339 121 299 115m-299-83 299 115m-299-83 299 115m-299-83 299 115m-299-83 299 115m-299-83 299 115" /></g>
    <path d="m418 191 143 55v109l-143-55Z" fill="#e32320" /><path d="m430 209 119 46v80l-119-45Z" fill="#333d3b" /><path d="m488 232 3 81" stroke="#aeb5ad" strokeWidth="3" />
    <path d="m190 177 148-88 300 115" fill="none" stroke="#e32320" strokeWidth="4" />
    <g fill="#656963" fontFamily="monospace" fontSize="12"><text x="540" y="550">ILLUSTRATIVE ASSEMBLY</text><text x="540" y="568">NOT A CONSTRUCTION PLAN</text></g>
  </svg>
}
