const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const referenceData = Array.isArray(window.referenceData) ? window.referenceData : [];
const referenceSearch = document.getElementById('referenceSearch');
const referenceList = document.getElementById('referenceList');
const referenceTotal = document.getElementById('referenceTotal');
const referenceShown = document.getElementById('referenceShown');
const referenceEmpty = document.getElementById('referenceEmpty');

function getDoiHref(doi) {
  if (!doi) return '';
  const trimmed = String(doi).trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed.replace(/^http:\/\/(dx\.)?doi\.org\//i, 'https://doi.org/');
  }
  return `https://doi.org/${trimmed.replace(/^doi:\s*/i, '')}`;
}

function createTextElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = textContent || '';
  return element;
}

function createChip(text, type) {
  const chip = document.createElement('span');
  chip.className = `reference-chip ${type || ''}`.trim();
  chip.textContent = text || 'Not coded';
  return chip;
}

function formatReferenceMeta(reference) {
  const authors = reference.authors || 'Authors not available';
  const year = reference.year || 'Year not available';
  const journal = reference.journal || 'Journal not available';
  return `${authors} (${year}). ${journal}.`;
}

function renderReferences(query = '') {
  if (!referenceList) return;

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = referenceData.filter(reference => {
    const haystack = [
      reference.id,
      reference.title,
      reference.authors,
      reference.journal,
      reference.year,
      reference.population,
      reference.intervention,
      reference.doi
    ].join(' ').toLowerCase();

    return haystack.includes(normalizedQuery);
  });

  referenceList.innerHTML = '';

  filtered.forEach((reference) => {
    const item = document.createElement('li');
    item.className = 'reference-item';

    const card = document.createElement('article');
    card.className = 'reference-link';
    if (reference.label) {
      card.classList.add(`reference-link--${String(reference.label).trim().toLowerCase()}`);
    }

    const number = createTextElement('span', 'reference-number', String(reference.id || '').padStart(2, '0'));
    if (reference.label) {
      number.classList.add(`reference-number--${String(reference.label).trim().toLowerCase()}`);
    }

    const textWrap = document.createElement('span');
    textWrap.className = 'reference-list-text';

    const title = createTextElement('span', 'reference-title-main', reference.title);
    const meta = createTextElement('span', 'reference-meta-line', formatReferenceMeta(reference));

    const chips = document.createElement('span');
    chips.className = 'reference-chip-row';

    if (reference.population && String(reference.population).trim()) {
      chips.appendChild(createChip(reference.population, 'population'));
    }

    (reference.interventions || []).forEach(intervention => {
      chips.appendChild(createChip(intervention, 'intervention'));
    });

    if (reference.doi) {
      chips.appendChild(createChip('DOI available', 'doi'));
    } else {
      chips.appendChild(createChip('No DOI', 'doi-missing'));
    }

    textWrap.append(title, meta, chips);

    const actions = document.createElement('span');
    actions.className = 'reference-actions';

    if (reference.doi) {
      const doiLink = document.createElement('a');
      doiLink.className = 'reference-doi-button';
      doiLink.href = getDoiHref(reference.doi);
      doiLink.target = '_blank';
      doiLink.rel = 'noopener';
      doiLink.textContent = `Open DOI ↗`;
      doiLink.setAttribute('aria-label', `Open DOI for ${reference.title}`);
      actions.appendChild(doiLink);
    }

    card.append(number, textWrap, actions);
    item.appendChild(card);
    referenceList.appendChild(item);
  });

  if (referenceTotal) referenceTotal.textContent = referenceData.length;
  if (referenceShown) referenceShown.textContent = filtered.length;
  if (referenceEmpty) referenceEmpty.style.display = filtered.length ? 'none' : 'block';
}

if (referenceSearch) {
  referenceSearch.addEventListener('input', event => renderReferences(event.target.value));
}

renderReferences();
