/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment, f as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../astro.179d3b66.mjs';
import { $ as $$Layout } from './404.astro.49de2f7b.mjs';
/* empty css                           */import { optimize } from 'svgo';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const quote = "Se camminassimo solo nelle giornate di sole non raggiungeremmo mai la nostra destinazione";
const author = "Paulo Coelho";
const description$1 = "Per creare un evento di successo è fondamentale avere qualcuno che possa aiutarti in ogni fase, dall'ideazione alla realizzazione. Hai solo qualche idea? Oppure hai già in mente tutto l'evento nei minimi dettagli? In ogni caso, possiamo aiutarti a realizzare il tuo sogno.";
const data$2 = {
	quote: quote,
	author: author,
	description: description$1
};

const $$Astro$l = createAstro("https://giansake.github.io");
const $$Jumbo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Jumbo;
  return renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="pt-[calc(120px+4em)] pb-12 w-full md:w-3/4 astro-Z3IL6LY4">
  <header class="pb-8 astro-Z3IL6LY4">
    <h1 class="text-4xl md:text-5xl text-client-blue font-bold text-gradient pb-4 astro-Z3IL6LY4">
      ${data$2.quote}
    </h1>
    <span class="font-light astro-Z3IL6LY4">${data$2.author}</span>
  </header>
  <div class="astro-Z3IL6LY4">
    <p class="text-2xl astro-Z3IL6LY4">
      ${data$2.description}
    </p>
  </div>
</section>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/components/Jumbo.astro");

const title$1 = "I nostri servizi";
const description = "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri.";
const button = "Contattaci";
const cards = [
	{
		title: "Eventi",
		description: "Fare networking oggi significa creare una rete di relazioni significative, che possano aiutare a migliorare la propria carriera o a intraprendere un’attività imprenditoriale in collaborazione con altri."
	},
	{
		title: "Conferenze internazionali",
		description: "Creiamo e ideiamo il tuo evento dalla base fino alla sua conclusione. Vogliamo che il tuo evento sia completo, professionale ma anche con dei momenti di svago."
	},
	{
		title: "Riunioni di lavoro",
		description: "Ogni riunione è il prodotto di un lavoro di gruppo nel senso dell’impiego di un’energia comune per raggiungere uno scopo determinato. EFFE ELLE E20 propone un servizio di management nel settore di riunioni di lavoro per organizzare al meglio i tuoi meeting aziendali."
	}
];
const data$1 = {
	title: title$1,
	description: description,
	button: button,
	cards: cards
};

const $$Astro$k = createAstro("https://giansake.github.io");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Button;
  const { dest, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button class="mt-4 bg-client-blue text-white px-8 py-2 rounded-xl duration-300 hover:bg-white hover:text-client-blue hover:shadow-md border-client-blue border text-lg sm:text-xl">
  <a${addAttribute(dest !== void 0 ? dest : "mailto:info@effelle20.it", "href")}> ${text}</a>
</button>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/components/Button.astro");

const $$Astro$j = createAstro("https://giansake.github.io");
const $$Card$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Card$1;
  const { title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="rounded-xl shadow-md p-8 bg-client-beige flex flex-col justify-between items-start hover:shadow-lg transition-shadow duration-300">
  <div class="flex flex-col gap-y-2 items-start pb-4">
    <h2 class="font-bold text-3xl min-h-[105px]">
      ${title}
    </h2>
    <p class="text-lg">
      ${body}
    </p>
  </div>
  ${renderComponent($$result, "Button", $$Button, { "text": "Scopri di pi\xF9" })}
</li>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/components/Card.astro");

const $$Astro$i = createAstro("https://giansake.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead($$result)}<section id="servizi" class="pt-[calc(120px+2em)] py-12 w-full">
  <header class="pb-8">
    <h2 class="text-3xl text-client-blue font-bold">
      ${data$1.title}
    </h2>
  </header>
  <div class="flex flex-col gap-y-4 items-start">
    <p class="text-lg w-full md:w-1/2">
      ${data$1.description}
    </p>
    ${renderComponent($$result, "Button", $$Button, { "text": data$1.button })}
  </div>
</section>
<ul role="list" class="grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
  ${data$1.cards.map((service) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Card", $$Card$1, { "title": service.title, "body": service.description })}
      ` })}`)}
</ul>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/components/Services.astro");

const title = "I nostri eventi";
const events = [
	{
		date: "19/06/2022 to 24/06/2022",
		location: "Perugia",
		title: "13th Torino Workshop on AGB stars",
		description: "Il congresso PharmaTech 2023 si focalizza sulle ultime innovazioni tecnologiche utilizzate per la ricerca e lo sviluppo di nuovi farmaci. Durante l'evento, esperti del settore condivideranno i loro studi e ricerche sulle nuove tecnologie applicate alla sintesi, formulazione e produzione di farmaci, nonché sui metodi di analisi dei dati e modellizzazione per lo sviluppo di farmaci personalizzati e innovativi.",
		btn_label: "Vai al sito dell'evento",
		btn_link: "https://en.wikipedia.org/wiki/New_Year%27s_Day"
	},
	{
		date: "02/07/2022 to 08/07/2022",
		location: "La Valle di Assisi Resort, Assisi",
		title: "14TH International conference on plant pathogenic bacteria",
		description: "",
		btn_label: "Vai al sito dell'evento",
		btn_link: "https://en.wikipedia.org/wiki/New_Year%27s_Day"
	},
	{
		date: "05/07/2022 to 08/07/2022",
		location: "Politecnico di Bari.",
		title: "22ND international conference on Web engineering (ICWE)",
		description: "Il congresso PharmaTech 2023 si focalizza sulle ultime innovazioni tecnologiche utilizzate per la ricerca e lo sviluppo di nuovi farmaci. Durante l'evento, esperti del settore condivideranno i loro studi e ricerche sulle nuove tecnologie applicate alla sintesi, formulazione e produzione di farmaci, nonché sui metodi di analisi dei dati e modellizzazione per lo sviluppo di farmaci personalizzati e innovativi.",
		btn_label: "Vai al sito dell'evento",
		btn_link: "https://en.wikipedia.org/wiki/New_Year%27s_Day"
	},
	{
		date: "13/09/2022 to 17/09/2022",
		location: "VIRTUAL",
		title: "Diagrams 2022",
		description: "Il congresso PharmaTech 2023 si focalizza sulle ultime innovazioni tecnologiche utilizzate per la ricerca e lo sviluppo di nuovi farmaci. Durante l'evento, esperti del settore condivideranno i loro studi e ricerche sulle nuove tecnologie applicate alla sintesi, formulazione e produzione di farmaci, nonché sui metodi di analisi dei dati e modellizzazione per lo sviluppo di farmaci personalizzati e innovativi.",
		btn_label: "Vai al sito dell'evento",
		btn_link: "https://en.wikipedia.org/wiki/New_Year%27s_Day"
	},
	{
		date: "16/01/2023 to 17/01/2023",
		location: "Bressanone",
		title: "GTTI- MMSP Thematic Meeting 2023 on Multimedia Signal Processing",
		description: "Il congresso PharmaTech 2023 si focalizza sulle ultime innovazioni tecnologiche utilizzate per la ricerca e lo sviluppo di nuovi farmaci. Durante l'evento, esperti del settore condivideranno i loro studi e ricerche sulle nuove tecnologie applicate alla sintesi, formulazione e produzione di farmaci, nonché sui metodi di analisi dei dati e modellizzazione per lo sviluppo di farmaci personalizzati e innovativi.",
		btn_label: "Vai al sito dell'evento",
		btn_link: "https://en.wikipedia.org/wiki/New_Year%27s_Day"
	}
];
const data = {
	title: title,
	events: events
};

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$h = createAstro("https://giansake.github.io");
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div class="accordion">\n  <ul class="accordion__wrapper">\n    ', `
  </ul>
</div>

<script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = accordionItem => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \`\${getPanelHeight(accordionItem)}px\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const closeAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const isAccordionOpen = accordionItem => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem () {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem)
      ? closeAccordionItem(accordionItem)
      : openAccordionItem(accordionItem)
  }

  function recalculateHeight () {
    const toggledAccordionItems = accordionItems.filter(element => element.classList.contains('is-active'))

    toggledAccordionItems.forEach(toggledAccordionItem => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \`\${getPanelHeight(toggledAccordionItem)}px\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \`accordion-item\${index + 1}\`)
    accordionItemPanel.setAttribute('id', \`item\${index + 1}\`)

    accordionItemHeader.setAttribute('aria-controls', \`item\${index + 1}\`)
    accordionItemPanel.setAttribute('aria-labelledby', \`accordion-item\${index + 1}\`)
  })

  document.addEventListener('keydown', event => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', event => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex(element => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script>`], ["", '<div class="accordion">\n  <ul class="accordion__wrapper">\n    ', `
  </ul>
</div>

<script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = accordionItem => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \\\`\\\${getPanelHeight(accordionItem)}px\\\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const closeAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const isAccordionOpen = accordionItem => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem () {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem)
      ? closeAccordionItem(accordionItem)
      : openAccordionItem(accordionItem)
  }

  function recalculateHeight () {
    const toggledAccordionItems = accordionItems.filter(element => element.classList.contains('is-active'))

    toggledAccordionItems.forEach(toggledAccordionItem => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \\\`\\\${getPanelHeight(toggledAccordionItem)}px\\\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \\\`accordion-item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('id', \\\`item\\\${index + 1}\\\`)

    accordionItemHeader.setAttribute('aria-controls', \\\`item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('aria-labelledby', \\\`accordion-item\\\${index + 1}\\\`)
  })

  document.addEventListener('keydown', event => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', event => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex(element => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script>`])), maybeRenderHead($$result), renderSlot($$result, $$slots["default"]));
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Accordion.astro");

const $$Astro$g = createAstro("https://giansake.github.io");
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { date, header } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="accordion__item">
  <h3>
    <button id="accordion-header-1" class="accordion__header" aria-expanded="false" aria-controls="accordion-panel-1" onclick="toggleAccordionItem()">
    <div class="accordion__date-title__container">
      <span class="accordion__header__title">${header}</span>
      <span class="accordion__header__date">${date}</span>
    </div>
      <svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
      </svg>
    </button>
  </h3>
  <div id="accordion-panel-1" role="region" class="accordion__panel" aria-labelledby="accordion-header-1">
    <div class="panel__inner">
      ${renderSlot($$result, $$slots["default"])}
    </div>
  </div>
</li>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/AccordionItem.astro");

const $$Astro$f = createAstro("https://giansake.github.io");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumbs" aria-label="Breadcrumbs">
  <ol>
    ${renderSlot($$result, $$slots["default"])}
  </ol>
</nav>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Breadcrumbs.astro");

const $$Astro$e = createAstro("https://giansake.github.io");
const $$BreadcrumbsItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BreadcrumbsItem;
  const {
    href = "#",
    label = "Breadcrumb",
    currentPage = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="breadcrumbs__item">
  ${currentPage ? renderTemplate`<span>${label}</span>` : renderTemplate`<a${addAttribute(href, "href")}>${label}</a>`}
</li>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/BreadcrumbsItem.astro");

const $$Astro$d = createAstro("https://giansake.github.io");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    url = "#",
    img = "https://fakeimg.pl/640x360",
    title = "Default title",
    footer = "Your name"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card">
  <div class="card__image">
    <img${addAttribute(img, "src")} alt="">
  </div>
  <div class="card__content">
    <h3>
      <a${addAttribute(url, "href")}>${title}</a>
    </h3>
    <p>
      ${renderSlot($$result, $$slots["default"], renderTemplate`Default description.`)}
    </p>
    <small>
      ${footer}
    </small>
  </div>
</div>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Card.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$c = createAstro("https://giansake.github.io");
const $$DarkMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$DarkMode;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg>
</button>

<script>
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
    localStorage.setItem('darkMode', null)
  }

  // execution
  if (darkMode === 'enabled') enableDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    darkMode !== 'enabled'
      ? enableDarkMode()
      : disableDarkMode()
  })
<\/script>`], ["", `<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg>
</button>

<script>
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
    localStorage.setItem('darkMode', null)
  }

  // execution
  if (darkMode === 'enabled') enableDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    darkMode !== 'enabled'
      ? enableDarkMode()
      : disableDarkMode()
  })
<\/script>`])), maybeRenderHead($$result));
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/DarkMode.astro");

const $$Astro$b = createAstro("https://giansake.github.io");
const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Media;
  const {
    class: classNames,
    src = "https://shorturl.at/tCPS2",
    alt = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(classNames, "class")}${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async">`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Media.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro("https://giansake.github.io");
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Modal;
  const {
    triggerId,
    title,
    closeText = "Close"
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="modal" role="dialog"', '>\n  <div class="modal__inner">\n    <div class="modal__content">\n      <h3 tabindex="-1">\n        ', "\n      </h3>\n      ", '\n    </div>\n    <div class="modal__close">\n      <button>', `</button>
    </div>
  </div>
</div>

<script type="module">
  // variables
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  const modalId = modal.getAttribute('aria-labelledby')
  const modalCloseButton = modal.querySelector('.modal__close button')
  const modalTrigger = document.querySelector(\`#\${modalId}\`)
  
  // functions
  const teleportToRoot = element => {
    element.remove()
    body.appendChild(element)
  }

  const getKeyboardFocusableElements = element => {
    return [...element.querySelectorAll(
      'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )]
      .filter(el => !el.hasAttribute('disabled'))
  }

  const trapFocus = event => {
    const focusables = getKeyboardFocusableElements(modal)
    const firstFocusable = focusables[0]
    const lastFocusable = focusables[focusables.length - 1]

    if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      firstFocusable.focus()
    }

    if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
      event.preventDefault()
      lastFocusable.focus()
    }
  }

  const openModal = _ => {
    const modalTitle = modal.querySelector('h3')

    modal.classList.add('show')
    body.classList.add('modal-is-active')
    modalTitle.focus()
    document.addEventListener('keydown', trapFocus)

    modal.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeModal()
      }
    })
  }

  const closeModal = _ => {
    modal.classList.remove('show')
    body.classList.remove('modal-is-active')
    modalTrigger.focus({ preventScroll: true })
    document.removeEventListener('keydown', trapFocus)
  }

  // execution
  teleportToRoot(modal)

  modalTrigger.addEventListener('click', openModal)

  modalCloseButton.addEventListener('click', closeModal)

  modal.addEventListener('click', event => { 
    if (!event.target.closest('.modal__content')) {
      closeModal()
    }
  })

  window.closeModal = closeModal
<\/script>`], ["", '<div class="modal" role="dialog"', '>\n  <div class="modal__inner">\n    <div class="modal__content">\n      <h3 tabindex="-1">\n        ', "\n      </h3>\n      ", '\n    </div>\n    <div class="modal__close">\n      <button>', `</button>
    </div>
  </div>
</div>

<script type="module">
  // variables
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  const modalId = modal.getAttribute('aria-labelledby')
  const modalCloseButton = modal.querySelector('.modal__close button')
  const modalTrigger = document.querySelector(\\\`#\\\${modalId}\\\`)
  
  // functions
  const teleportToRoot = element => {
    element.remove()
    body.appendChild(element)
  }

  const getKeyboardFocusableElements = element => {
    return [...element.querySelectorAll(
      'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )]
      .filter(el => !el.hasAttribute('disabled'))
  }

  const trapFocus = event => {
    const focusables = getKeyboardFocusableElements(modal)
    const firstFocusable = focusables[0]
    const lastFocusable = focusables[focusables.length - 1]

    if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      firstFocusable.focus()
    }

    if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
      event.preventDefault()
      lastFocusable.focus()
    }
  }

  const openModal = _ => {
    const modalTitle = modal.querySelector('h3')

    modal.classList.add('show')
    body.classList.add('modal-is-active')
    modalTitle.focus()
    document.addEventListener('keydown', trapFocus)

    modal.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeModal()
      }
    })
  }

  const closeModal = _ => {
    modal.classList.remove('show')
    body.classList.remove('modal-is-active')
    modalTrigger.focus({ preventScroll: true })
    document.removeEventListener('keydown', trapFocus)
  }

  // execution
  teleportToRoot(modal)

  modalTrigger.addEventListener('click', openModal)

  modalCloseButton.addEventListener('click', closeModal)

  modal.addEventListener('click', event => { 
    if (!event.target.closest('.modal__content')) {
      closeModal()
    }
  })

  window.closeModal = closeModal
<\/script>`])), maybeRenderHead($$result), addAttribute(triggerId, "aria-labelledby"), title, renderSlot($$result, $$slots["default"], renderTemplate`Modal description.`), closeText);
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Modal.astro");

const $$Astro$9 = createAstro("https://giansake.github.io");
const $$Notification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Notification;
  const {
    type = "default",
    role = "none",
    ariaLive = "off"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`notification type-${type}`, "class")}${addAttribute(role, "role")}${addAttribute(ariaLive, "aria-live")}>
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <p><strong>Message:</strong> This is a notification!</p>
  `)}
</div>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Notification.astro");

const $$Astro$8 = createAstro("https://giansake.github.io");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    firstPage = "#",
    previousPage = "#",
    nextPage = "#",
    lastPage = "#",
    currentPage = "1",
    totalPages = "12"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="pagination" aria-label="Pagination">
  <ul class="pagination__list">
    <li>
      ${firstPage ? renderTemplate`<a${addAttribute(firstPage, "href")} aria-label="Go to the first page"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>` : renderTemplate`<span class="disabled"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>`}
    </li>
    <li>
      ${previousPage ? renderTemplate`<a${addAttribute(previousPage, "href")}${addAttribute(`Go back to ${previousPage}`, "aria-label")}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path></svg></a>` : renderTemplate`<span class="disabled"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path></svg></span>`}
    </li>
    <li>
      <span>Page ${currentPage} of ${totalPages}</span>
    </li>
    <li>
      ${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")}${addAttribute(`Go to ${nextPage}`, "aria-label")}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path></svg></a>` : renderTemplate`<span class="disabled"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path></svg></span>`}
    </li>
    <li>
      ${lastPage ? renderTemplate`<a${addAttribute(lastPage, "href")} aria-label="Go to the last page"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>` : renderTemplate`<span class="disabled"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>`}
    </li>
  </ul>
</nav>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/Pagination.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://giansake.github.io");
const $$SkipLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SkipLinks;
  return renderTemplate(_a || (_a = __template(["", `<div class="skip-links">
  <a href="#main-content">Skip to main content</a>
</div>

<script type="module">
  // variables
  const skipLink = document.querySelector('.skip-links a')

  // execution
  skipLink.addEventListener('keydown', event => {
    if (!event.target.closest('a')) return
    const key = event.key

    if (key !== 'Enter') return
    event.preventDefault()
    const target = event.target.getAttribute('href')

    if (document.querySelector(target)) {
      const targetElement = document.querySelector(target)
      targetElement.setAttribute('tabindex', '-1')
      targetElement.focus()
    } else if (!document.querySelector(target) && document.querySelector('h1')) {
      const h1 = document.querySelector('h1')
      h1.setAttribute('tabindex', '-1')
      h1.focus()
    } else {
      console.warn('SkipLinks are not set, either missing an h1 or main content id on the page.')
    }
  })
<\/script>`])), maybeRenderHead($$result));
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/accessible-astro-components/SkipLinks.astro");

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$6 = createAstro("https://giansake.github.io");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$5 = createAstro("https://giansake.github.io");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$4 = createAstro("https://giansake.github.io");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/astro-icon/lib/SpriteProvider.astro");

const $$Astro$3 = createAstro("https://giansake.github.io");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/node_modules/astro-icon/lib/Sprite.astro");

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$2 = createAstro("https://giansake.github.io");
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Events;
  return renderTemplate`${maybeRenderHead($$result)}<section id="eventi" class="mb-8 pt-[calc(120px+2em)] pb-12">
  <header class="pb-8">
    <h2 class="text-3xl text-client-blue font-bold">
      ${data.title}
    </h2>
  </header>
  ${renderComponent($$result, "Accordion", $$Accordion, {}, { "default": ($$result2) => renderTemplate`${data.events.map((event) => renderTemplate`${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "date": event.date, "header": event.title }, { "default": ($$result3) => renderTemplate`
          <div class="flex flex-col gap-y-4 sm:p-4">
            <div class="pb-4 flex flex-col gap-y-4">
              <h2 class="font-bold text-4xl">${event.title}</h2>
            </div>

            <div class="flex flex-row items-center gap-x-2 text-gray-500">
              <div class="w-10 h-10 sm:w-12 sm:h-12">
                ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:calendar" })}
              </div>
              <p class="text-xl sm:text-lg">${event.date}</p>
            </div>
            <div class="flex flex-row items-center gap-x-2 text-gray-500">
              <div class="w-10 h-10 sm:w-12 sm:h-12">
                ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:location" })}
              </div>
              <p class="text-xl sm:text-lg">${event.location}</p>
            </div>

            <p class="text-xl sm:text-lg py-8">${event.description}</p>

            <div class="flex flex-col items-center justify-center relative z-[1]">
              ${renderComponent($$result3, "Button", $$Button, { "dest": event.btn_link, "text": event.btn_label })}
            </div>
          </div>
        ` })}`)}` })}
</section>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/components/Events.astro");

const $$Astro$1 = createAstro("https://giansake.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead($$result)}<section id="chi-siamo" class="pt-[calc(120px+2em)] text-client-blue">
  <div class="shadow-xl">
    <div class="bg-client-beige p-8 sm:p-20 flex flex-col gap-y-12">
      <h2 class="text-4xl z-[1] font-bold">
        Chi siamo <br>
        <span class="font-light">Who we are</span>
      </h2>
      <p class="text-xl sm:text-2xl">
        EFFE ELLE E20 è una Agenzia di produzione eventi aziendali che offre una
        gamma completa di servizi e si impegna a creare eventi indimenticabili
        per una varietà di clienti e settori diversi. Uniamo la conoscenza
        derivante da anni di esperienza all'ispirazione e all'ingegno; questo ci
        permette di trasformare le location per regalare ai tuoi ospiti
        un'esperienza davvero unica. Contattaci e inizieremo subito a lavorare
        insieme per organizzare l'evento perfetto per te
      </p>
      <div class="mt-8">
        ${renderComponent($$result, "Button", $$Button, { "text": "Conosciamoci meglio" })}
      </div>
    </div>
  </div>
</section>`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/components/About.astro");

const $$Astro = createAstro("https://giansake.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Effe Elle Eventi", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="px-6 sm:px-12 md:px-20 astro-J7PV25F6">
    ${renderComponent($$result2, "Jumbo", $$Jumbo, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "Services", $$Services, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "Events", $$Events, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "About", $$About, { "class": "astro-J7PV25F6" })}
  </main>
` })}`;
}, "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/pages/index.astro");

const $$file = "/Users/giammarcogaudenzi/Desktop/EffeElleEventi/src/pages/index.astro";
const $$url = "/EffeElleEventi";

export { $$Index as default, $$file as file, $$url as url };
