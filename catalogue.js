const TMDB_KEY  = '232a7338c36748bff95e5de149a21b95';
const TMDB_BASE = 'https://api.themoviedb.org/3';
const IMG_BASE  = 'https://image.tmdb.org/t/p/w342';

const CATALOGUE = [
  { cat:'hollywood', title:'Inception',                          tmdb:'27205',  year:'2010', rating:'8.8', runtime:'2h 42m', trailer:'YoHD9XEInc0' },
  { cat:'hollywood', title:'The Dark Knight',                    tmdb:'155',    year:'2008', rating:'9.0', runtime:'2h 32m', trailer:'LDG9bisJEaI' },
  { cat:'hollywood', title:'Parasite',                           tmdb:'496243', year:'2019', rating:'8.6', runtime:'2h 12m', trailer:'SEUXfv87Wpk' },
  { cat:'hollywood', title:"We're the Millers",                  tmdb:'131634', year:'2013', rating:'7.0', runtime:'1h 58m', trailer:'0Vsy5KzsieQ' },
  { cat:'hollywood', title:'The Terminal',                       tmdb:'7232',   year:'2004', rating:'7.4', runtime:'2h 8m',  trailer:'hjydAG1lG_8' },
  { cat:'hollywood', title:'The Matrix',                         tmdb:'603',    year:'1999', rating:'8.7', runtime:'2h 16m', trailer:'vKQi3bBA1y8' },
  { cat:'hollywood', title:'Joker',                              tmdb:'475557', year:'2019', rating:'8.4', runtime:'2h 2m',  trailer:'zAGVQLHvwOY' },
  { cat:'hollywood', title:'GoodFellas',                         tmdb:'769',    year:'1990', rating:'8.7', runtime:'2h 28m', trailer:'qo5jJpHtI1Y' },
  { cat:'hollywood', title:'The Shawshank Redemption',           tmdb:'278',    year:'1994', rating:'9.3', runtime:'2h 22m', trailer:'6hB3S9bIaco' },
  { cat:'hollywood', title:'The Green Mile',                     tmdb:'497',    year:'1999', rating:'8.6', runtime:'3h 9m',  trailer:'Ki4haFrqSrw' },
  { cat:'hollywood', title:'Interstellar',                       tmdb:'157336', year:'2014', rating:'8.6', runtime:'2h 55m', trailer:'zSWdZVtXT7E' },
  { cat:'hollywood', title:'Avengers: Endgame',                  tmdb:'299534', year:'2019', rating:'8.4', runtime:'3h 1m',  trailer:'TcMBFSGVi1c' },
  { cat:'hollywood', title:'Avengers: Infinity War',             tmdb:'299536', year:'2018', rating:'8.4', runtime:'2h 40m', trailer:'6ZfuNTqbHE8' },
  { cat:'hollywood', title:'Spider-Man',                         tmdb:'557',    year:'2002', rating:'7.3', runtime:'2h 1m',  trailer:'-tnxzJ0SSOw' },
  { cat:'hollywood', title:'The Dark Knight Rises',              tmdb:'49026',  year:'2012', rating:'8.4', runtime:'2h 44m', trailer:'g8evyE9TuYk' },
  { cat:'hollywood', title:'The Chronicles of Narnia',           tmdb:'806',    year:'2005', rating:'6.9', runtime:'2h 30m', trailer:'ruGHxmjQ180' },
  { cat:'hollywood', title:'Hamilton',                           tmdb:'556574', year:'2020', rating:'8.4', runtime:'2h 40m', trailer:'DSCKfXpAGHc' },
  { cat:'hollywood', title:'Dunkirk',                            tmdb:'374720', year:'2017', rating:'7.8', runtime:'1h 46m', trailer:'F-eMt3SrfFU' },
  { cat:'hollywood', title:'1917',                               tmdb:'530915', year:'2019', rating:'8.3', runtime:'1h 59m', trailer:'YqNYrYUiMfg' },

  { cat:'bollywood', title:'Andaz Apna Apna',                    tmdb:'43768',  year:'1994', rating:'8.1', runtime:'2h 41m', trailer:'fd_w7Qw8biU' },
  { cat:'bollywood', title:'Chak De! India',                     tmdb:'22272',  year:'2007', rating:'8.2', runtime:'2h 33m', trailer:'6a0-dSMWm5g' },
  { cat:'bollywood', title:'Bhaag Milkha Bhaag',                 tmdb:'164021', year:'2013', rating:'8.2', runtime:'3h 9m',  trailer:'3uICXnnW86U' },
  { cat:'bollywood', title:'A Wednesday',                        tmdb:'43514',  year:'2008', rating:'8.1', runtime:'1h 44m', trailer:'yry6pBiXx14' },
  { cat:'bollywood', title:'MS Dhoni: The Untold Story',         tmdb:'381309', year:'2016', rating:'7.9', runtime:'3h 40m', trailer:'6L6XqWoS8tw' },
  { cat:'bollywood', title:'Drishyam',                           tmdb:'297254', year:'2015', rating:'8.2', runtime:'2h 43m', trailer:'AuuX2j14NBg' },
  { cat:'bollywood', title:'Dilwale Dulhania Le Jayenge',        tmdb:'19404',  year:'1995', rating:'8.1', runtime:'3h 12m', trailer:'oIZ4U21DRlM' },
  { cat:'bollywood', title:'Gangs of Wasseypur',                 tmdb:'90560',  year:'2012', rating:'8.2', runtime:'2h 40m', trailer:'j-AkWDkXcMY' },
  { cat:'bollywood', title:'Sholay',                             tmdb:'14309',  year:'1975', rating:'8.2', runtime:'3h 24m', trailer:'XjiluhItzIA' },
  { cat:'bollywood', title:'Rang De Basanti',                    tmdb:'21955',  year:'2006', rating:'8.1', runtime:'2h 51m', trailer:'QHhnhqxB4E8' },
  { cat:'bollywood', title:'Munna Bhai MBBS',                    tmdb:'22853',  year:'2003', rating:'8.1', runtime:'2h 36m', trailer:'H0OMXwKrGs8' },
  { cat:'bollywood', title:'KGF: Chapter 1',                     tmdb:'529816', year:'2018', rating:'8.3', runtime:'2h 36m', trailer:'-KfsY-qwBS0' },
  { cat:'bollywood', title:'Dangal',                             tmdb:'368006', year:'2016', rating:'8.3', runtime:'2h 41m', trailer:'x_7YlGv9u1g' },

  { cat:'series-hw', title:'Breaking Bad',    tmdb:'1396',   year:'2008', rating:'9.5', runtime:'5 seasons', trailer:'HhesaQXLuRY', isTv:true },
  { cat:'series-hw', title:'Game of Thrones', tmdb:'1399',   year:'2011', rating:'9.2', runtime:'8 seasons', trailer:'gcTkNV5Vg1E', isTv:true },
  { cat:'series-hw', title:'Chernobyl',       tmdb:'87108',  year:'2019', rating:'9.4', runtime:'5 eps',     trailer:'s9APLXM9Ei8', isTv:true },
  { cat:'series-hw', title:'Stranger Things', tmdb:'66732',  year:'2016', rating:'8.7', runtime:'4 seasons', trailer:'b9EkMc79ZSU', isTv:true },
  { cat:'series-hw', title:'Peaky Blinders',  tmdb:'60574',  year:'2013', rating:'8.8', runtime:'6 seasons', trailer:'oVzVdvGIC7U', isTv:true },
  { cat:'series-hw', title:'Ozark',           tmdb:'69740',  year:'2017', rating:'8.4', runtime:'4 seasons', trailer:'5hAXVqrljbs', isTv:true },
  { cat:'series-hw', title:'Sherlock',        tmdb:'19885',  year:'2010', rating:'9.1', runtime:'4 seasons', trailer:'xK7S9mrFWL4', isTv:true },
  { cat:'series-hw', title:'The Witcher',     tmdb:'71912',  year:'2019', rating:'8.5', runtime:'3 seasons', trailer:'ndl1W4ltcmg', isTv:true },
  { cat:'series-hw', title:'Money Heist',     tmdb:'71446',  year:'2017', rating:'8.3', runtime:'5 seasons', trailer:'p_PJbmrX4uk', isTv:true },
  { cat:'series-hw', title:'Lucifer',         tmdb:'63174',  year:'2016', rating:'8.1', runtime:'6 seasons', trailer:'-0beFQnB5lY', isTv:true },
  { cat:'series-hw', title:'The Crown',       tmdb:'65494',  year:'2016', rating:'8.6', runtime:'6 seasons', trailer:'w1pIbUOc_lU', isTv:true },
  { cat:'series-hw', title:'Black Mirror',    tmdb:'42009',  year:'2011', rating:'8.8', runtime:'6 seasons', trailer:'V0XOApF5nLU', isTv:true },
  { cat:'series-hw', title:'WandaVision',     tmdb:'85271',  year:'2021', rating:'8.0', runtime:'1 season',  trailer:'sj9J2ecsSpo', isTv:true },
  { cat:'series-hw', title:'Firefly',         tmdb:'1437',   year:'2002', rating:'9.0', runtime:'1 season',  trailer:'oBZrZij2-g8', isTv:true },

  { cat:'series-bw', title:'Mirzapur',        tmdb:'78264',  year:'2018', rating:'8.4', runtime:'3 seasons', trailer:'ZNeGF-PvRHY', isTv:true },
  { cat:'series-bw', title:'Sacred Games',    tmdb:'77055',  year:'2018', rating:'8.7', runtime:'2 seasons', trailer:'lM1xVnYsirw', isTv:true },
  { cat:'series-bw', title:'Scam 1992',       tmdb:'98879',  year:'2020', rating:'9.5', runtime:'1 season',  trailer:'ISORfez27og', isTv:true },
  { cat:'series-bw', title:'Panchayat',       tmdb:'99762',  year:'2020', rating:'8.7', runtime:'3 seasons', trailer:'mojZJ7oeD_g', isTv:true },
  { cat:'series-bw', title:'Kota Factory',    tmdb:'96676',  year:'2019', rating:'9.0', runtime:'2 seasons', trailer:'pNZQ6msbOvM', isTv:true },
  { cat:'series-bw', title:'Paatal Lok',      tmdb:'101135', year:'2020', rating:'7.8', runtime:'1 season',  trailer:'cNwWMW4mxO8', isTv:true },
  { cat:'series-bw', title:'Asur',            tmdb:'96552',  year:'2020', rating:'8.4', runtime:'2 seasons', trailer:'LDirQBvwx7g', isTv:true },
  { cat:'series-bw', title:'Bandish Bandits', tmdb:'106135', year:'2020', rating:'8.7', runtime:'1 season',  trailer:'UhU57OgGp50', isTv:true },
  { cat:'series-bw', title:'Mismatched',      tmdb:'110316', year:'2020', rating:'8.4', runtime:'2 seasons', trailer:'uYmwNNkix-k', isTv:true },
  { cat:'series-bw', title:'TVF Pitchers',    tmdb:'64490',  year:'2015', rating:'9.1', runtime:'2 seasons', trailer:'84Jk1OqDqOo', isTv:true },
  { cat:'series-bw', title:'Criminal Justice',tmdb:'93784',  year:'2019', rating:'8.1', runtime:'3 seasons', trailer:'KPyNH7mZkGc', isTv:true },

  { cat:'anime', title:'Death Note',                       tmdb:'13916',  year:'2006', rating:'9.0', runtime:'37 eps',    trailer:'NlJZ-YgAt-c', isTv:true },
  { cat:'anime', title:'Naruto',                           tmdb:'46260',  year:'2002', rating:'8.3', runtime:'220 eps',   trailer:'-G9BqkgZXRA', isTv:true },
  { cat:'anime', title:'Attack on Titan',                  tmdb:'1429',   year:'2013', rating:'9.0', runtime:'87 eps',    trailer:'o_go-8TFBXs', isTv:true },
  { cat:'anime', title:'Demon Slayer',                     tmdb:'85937',  year:'2019', rating:'8.7', runtime:'44 eps',    trailer:'VQGCKyvzIM4', isTv:true },
  { cat:'anime', title:'One Punch Man',                    tmdb:'65930',  year:'2015', rating:'8.8', runtime:'24 eps',    trailer:'Poo5lqoWSGw', isTv:true },
  { cat:'anime', title:'Tokyo Ghoul',                      tmdb:'61374',  year:'2014', rating:'7.8', runtime:'48 eps',    trailer:'ETHpMMV8rJU', isTv:true },
  { cat:'anime', title:'Fullmetal Alchemist: Brotherhood', tmdb:'31911',  year:'2009', rating:'9.1', runtime:'64 eps',    trailer:'--IcmZkvL0Q', isTv:true },
  { cat:'anime', title:'One Piece',                        tmdb:'37854',  year:'1999', rating:'8.8', runtime:'1000+ eps', trailer:'S8_YwFLCh4U', isTv:true },
];

const posterCache = {};

async function fetchPoster(tmdb, isTv) {
  if (posterCache[tmdb]) return posterCache[tmdb];
  const type = isTv ? 'tv' : 'movie';
  try {
    const r = await fetch(`${TMDB_BASE}/${type}/${tmdb}?api_key=${TMDB_KEY}`);
    const d = await r.json();
    const path = d.poster_path ? IMG_BASE + d.poster_path : null;
    posterCache[tmdb] = path;
    return path;
  } catch { return null; }
}

let activeCat    = 'all';
let filteredData = [...CATALOGUE];

function setCat(btn, cat) {
  activeCat = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function filterCatalogue() { applyFilters(); }

function applyFilters() {
  const q = (document.getElementById('cat-search').value || '').toLowerCase().trim();
  filteredData = CATALOGUE.filter(item => {
    const catOk = activeCat === 'all' || item.cat === activeCat;
    const qOk   = !q || item.title.toLowerCase().includes(q) || item.year.includes(q);
    return catOk && qOk;
  });
  renderGrid();
}

function badgeFor(cat) {
  if (cat === 'anime')                             return { cls:'anime',  label:'Anime' };
  if (cat === 'series-hw' || cat === 'series-bw') return { cls:'series', label:'Series' };
  return { cls:'movie', label:'Movie' };
}

function goWatch(item) {
  const params = new URLSearchParams({
    tmdb:    item.tmdb,
    title:   item.title,
    year:    item.year,
    rating:  item.rating,
    runtime: item.runtime,
    cat:     item.cat,
  });
  if (item.isTv) params.set('tv', '1');
  window.location = `watch.html?${params.toString()}`;
}

function renderGrid() {
  const grid  = document.getElementById('cat-grid');
  const noRes = document.getElementById('cat-no-results');
  grid.innerHTML = '';
  if (!filteredData.length) { noRes.style.display='block'; return; }
  noRes.style.display = 'none';

  filteredData.forEach((item, idx) => {
    const badge = badgeFor(item.cat);
    const card  = document.createElement('article');
    card.className = 'cat-card';
    card.innerHTML = `
      <div class="cat-card-poster">
        <div class="cat-poster-fallback" id="fallback-${idx}">
          <div class="cat-poster-spinner"></div>
        </div>
        <img id="poster-${idx}" src="" alt="${item.title}" style="display:none;width:100%;height:100%;object-fit:cover;position:absolute;inset:0;transition:transform 0.4s ease" />
        <div class="cat-card-overlay">
          <button class="cat-play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          </button>
          <div class="cat-overlay-actions">
            ${item.trailer ? `<button class="cat-trailer-btn" onclick="event.stopPropagation();openTrailer(${idx})">▶ Trailer</button>` : ''}
          </div>
        </div>
        <span class="cat-type-badge ${badge.cls}">${badge.label}</span>
      </div>
      <div class="cat-card-info">
        <div class="cat-card-title">${item.title}</div>
        <div class="cat-card-meta">
          <span class="cat-card-rating">★ ${item.rating}</span>
          <span>${item.year}</span>
          <span>${item.runtime}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => goWatch(item));
    grid.appendChild(card);

    fetchPoster(item.tmdb, item.isTv).then(url => {
      const img      = document.getElementById(`poster-${idx}`);
      const fallback = document.getElementById(`fallback-${idx}`);
      if (url && img) {
        img.src = url;
        img.style.display = 'block';
        img.onload  = () => { if (fallback) fallback.style.display = 'none'; };
        img.onerror = () => {
          img.style.display = 'none';
          if (fallback) fallback.innerHTML = `<span class="fi">🎬</span><span class="ft">${item.title.toUpperCase()}</span>`;
        };
      } else if (fallback) {
        fallback.innerHTML = `<span class="fi">🎬</span><span class="ft">${item.title.toUpperCase()}</span>`;
      }
    });
  });
}

function openTrailer(idx) {
  const item = filteredData[idx];
  document.getElementById('trailer-title').textContent = item.title + ' — Trailer';
  document.getElementById('trailer-frame').src = `https://www.youtube.com/embed/${item.trailer}?autoplay=1`;
  document.getElementById('trailer-modal').classList.add('open');
  document.getElementById('trailer-modal').setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeTrailer() {
  document.getElementById('trailer-modal').classList.remove('open');
  document.getElementById('trailer-modal').setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  setTimeout(() => { document.getElementById('trailer-frame').src = ''; }, 300);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTrailer(); });
window.addEventListener('DOMContentLoaded', renderGrid);
