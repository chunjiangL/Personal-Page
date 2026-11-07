const cards = new Map(Array.from(document.querySelectorAll('[data-project]'), button => [button.dataset.project, button]));
const player = document.getElementById('gallery-player');
const title = document.getElementById('project-title');
const stage = document.getElementById('project-stage');
const descriptions = document.querySelectorAll('[data-project-description]');
const revision = new URL(import.meta.url).searchParams.get('v');
let active = null;
let frame = null;

function projectURL(key) {
  const page = new URL(location.href);
  const url = new URL(cards.get(key).dataset.view, page);
  if (key === 'sketch-game') {
    for (const param of ['scene', 'time', 'cold']) {
      if (page.searchParams.has(param)) url.searchParams.set(param, page.searchParams.get(param));
    }
  }
  if (revision) url.searchParams.set('v', revision);
  if (page.searchParams.has('qa')) url.searchParams.set('qa', '1');
  if (key === 'mirror-world' && page.searchParams.has('qa')) url.searchParams.set('diagnostics', '');
  return url;
}

function display(key) {
  const card = cards.get(key);
  if (active === key) return;
  // Removing the browsing context also stops its renderer, workers and pending loads.
  stage.replaceChildren();
  frame = null;
  active = card ? key : null;
  for (const [id, button] of cards) button.setAttribute('aria-pressed', String(id === active));
  for (const description of descriptions) description.hidden = description.dataset.projectDescription !== active;
  player.hidden = !card;
  if (!card) return;
  title.textContent = card.querySelector('span').textContent;
  frame = document.createElement('iframe');
  frame.title = title.textContent;
  frame.allowFullscreen = true;
  frame.className = {'sketch-game':'life-frame', 'mirror-world':'mirror-canvas'}[key];
  frame.src = projectURL(key).href;
  stage.append(frame);
  if (key === 'mirror-world') player.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}

function select(key) {
  if (key === active) return;
  const url = new URL(location.href);
  url.hash = key ?? '';
  history.pushState({galleryProject:key}, '', url);
  display(key);
}

function projectForEntry() {
  // Closing the player is an explicit choice for this history entry.
  if (Object.hasOwn(history.state ?? {}, 'galleryProject')) {
    const previous = history.state.galleryProject;
    return previous === null || cards.has(previous) ? previous : 'sketch-game';
  }
  const linkedProject = location.hash.slice(1);
  return cards.has(linkedProject) ? linkedProject : 'sketch-game';
}

for (const [key, button] of cards) button.addEventListener('click', () => select(key));
document.getElementById('close-project').addEventListener('click', () => {
  const previous = cards.get(active);
  select(null);
  previous?.focus();
});
window.addEventListener('popstate', () => display(projectForEntry()));
window.addEventListener('message', event => {
  if (!frame || event.origin !== location.origin || event.source !== frame.contentWindow) return;
  const data = event.data;
  if (active === 'sketch-game' && data?.action === 'life-view') {
    if (Number.isFinite(data.height) && data.height > 0) frame.style.height = data.height + 'px';
    if (!['neighborhood','bedroom'].includes(data.scene)) return;
    const url = new URL(location.href);
    url.searchParams.set('scene', data.scene);
    if (data.time) url.searchParams.set('time', data.time);
    else url.searchParams.delete('time');
    history.replaceState(history.state, '', url);
  }
});
display(projectForEntry());
