const profileInfoData = [
  {
    infoNumber: 7,
    description: 'Years of <br/>work',
  },
  {
    infoNumber: 123,
    description: 'Completed<br/>projects',
  },
  {
    infoNumber: 97,
    description: 'Satisfied <br/>customer',
  },
];

const tabs = document.querySelectorAll('[data-target]'),
  tabsContent = document.querySelectorAll('[data-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContent.forEach((tc) => {
      tc.classList.remove('filtersActive');
    });

    target.classList.add('filtersActive');

    tabs.forEach((tab) => {
      tab.classList.remove('filtersTabActive');
    });

    tab.classList.add('filtersTabActive');
  });
});

const themeButton = document.getElementById('themeButton');
const darkTheme = 'darkTheme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'light';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selectedTheme', getCurrentTheme());
  localStorage.setItem('selectedIcon', getCurrentIcon());
});

const scrollReveal = () => {
  const windowHeight = window.innerHeight;

  const projectCards = document.querySelectorAll('.projectsCard');

  projectCards.forEach((projectCard) => {
    const projectCardTop = projectCard.getBoundingClientRect().top;

    if (projectCardTop < windowHeight) {
      projectCard.classList.add('animate');
    }
  });
};

const bodyLoad = () => {
  //   document.body.classList.remove('hide');
  //   document.body.removeChild(document.querySelector('.preloader'));

  document.querySelectorAll('#profileName span').forEach((charEl) => {
    charEl.classList.add('scaleAnim');
  });
  // -------------------------- //

  document.querySelector('.profileProfession').classList.add('animate');

  document.querySelectorAll('.profileSocialLink').forEach((profileSocial) => {
    profileSocial.classList.add('scaleAnim');
  });

  document.querySelectorAll('.profileInfoGroup').forEach((profileInfoGroup) => {
    profileInfoGroup.classList.add('animate');
  });

  document.querySelector('.filtersContent').classList.add('animate');

  document.querySelectorAll('.profileButtons a').forEach((profileSocial) => {
    profileSocial.classList.add('scaleAnim');
  });

  // -------------------------- //

  const windowHeight = window.innerHeight;

  document.querySelectorAll('.projectsCard').forEach((projectCard) => {
    const projectCardTop = projectCard.getBoundingClientRect().top;

    if (projectCardTop < windowHeight) {
      projectCard.classList.add('animate');
    }
  });
  // -------------------------- //
};

// --------------------UI Rendering-------------------------- //

const profileName = document.getElementById('profileName');
const nameArr = 'Abdulmaleeek Adams'.split('');

document.documentElement.style.setProperty('--transition-delay', '0s');

nameArr.map((char, idx) => {
  const spanHTML =
    char === ' '
      ? ' '
      : `<span  style="transition-delay: ${idx * 50}ms;">${char}</span>`;
  profileName.insertAdjacentHTML('beforeend', spanHTML);
});

const profileInfo = document.querySelector('.profileInfo');
profileInfoData.map((info, idx) => {
  const { infoNumber, description } = info;
  const profileInfoUI = `<div class="profileInfoGroup" style="transition-delay: ${
    idx * 50
  }ms;">
            <h3 class="profileInfoNumber">${infoNumber}</h3>
            <p class="profileInfoDescription">
              ${description}
            </p>
          </div>`;
  profileInfo.insertAdjacentHTML('beforeend', profileInfoUI);
});

// ---------------------------------------------- //

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', bodyLoad);
