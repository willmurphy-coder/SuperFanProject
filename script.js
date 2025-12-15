const tanjiroSound = document.getElementById("tanjiroSound");
const inosukeSound = document.getElementById("inosukeSound");
const zenitsuSound = document.getElementById("zenitsuSound");

function changeTanjiro() {
  // stop others
  inosukeSound.pause();
  zenitsuSound.pause();
  // play sound
  tanjiroSound.currentTime = 0;
  tanjiroSound.play();

  document.getElementById("demonslayer").src = "images/tanjiro.jpg";
  document.getElementById("demonslayer").classList.remove("shadow");
  document.getElementById("tanjiro").src = "images/demonslayerlogo.png";
  document.getElementById("tanjiro").classList.add("shadow");
  document.getElementById("inosuke").src = "images/inosukefunny.jpg";
  document.getElementById("inosuke").classList.remove("shadow");
  document.getElementById("zenitsu").src = "images/zenitsufunny.avif";
  document.getElementById("zenitsu").classList.remove("shadow");
  document.getElementById("slayer-info").textContent =
    "Tanjiro Kamado is a kind-hearted and determined Demon Slayer known for his strong sense of empathy and unwavering resolve. After tragedy strikes his family, he sets out on a journey to protect others and find a way to help his sister. Tanjiro's sharp nose, disciplined training, and Water Breathing techniques make him a skilled and reliable fighter.";
}

function changeInosuke() {
  tanjiroSound.pause();
  zenitsuSound.pause();
  // play sound
  inosukeSound.currentTime = 0;
  inosukeSound.play();
  document.getElementById("demonslayer").src = "images/inosuke.jpeg";
  document.getElementById("demonslayer").classList.remove("shadow");
  document.getElementById("inosuke").src = "images/demonslayerlogo.png";
  document.getElementById("inosuke").classList.add("shadow");
  document.getElementById("tanjiro").src = "images/tanjirofunny.png";
  document.getElementById("tanjiro").classList.remove("shadow");
  document.getElementById("zenitsu").src = "images/zenitsufunny.avif";
  document.getElementById("zenitsu").classList.remove("shadow");
  document.getElementById("slayer-info").textContent =
    "Inosuke Hashibira is a wild, energetic Demon Slayer raised in the mountains, known for his boar mask and fierce personality. Bold and competitive, he's always eager to challenge strong opponents. Despite his rough exterior, Inosuke grows more understanding over time and fights fiercely to protect his friends using his unique Beast Breathing style.";
}

function changeZenitsu() {
  tanjiroSound.pause();
  inosukeSound.pause();
  // play sound
  zenitsuSound.currentTime = 0;
  zenitsuSound.play();
  document.getElementById("demonslayer").src = "images/zenitsu.png";
  document.getElementById("demonslayer").classList.remove("shadow");
  document.getElementById("zenitsu").src = "images/demonslayerlogo.png";
  document.getElementById("zenitsu").classList.add("shadow");
  document.getElementById("tanjiro").src = "images/tanjirofunny.png";
  document.getElementById("tanjiro").classList.remove("shadow");
  document.getElementById("inosuke").src = "images/inosukefunny.jpg";
  document.getElementById("inosuke").classList.remove("shadow");
  document.getElementById("slayer-info").textContent =
    "Zenitsu Agatsuma is a nervous but talented Demon Slayer who often doubts himself, yet possesses incredible potential. Though easily frightened, he shows immense bravery when it matters most. When he falls asleep or calms his mind, he can unleash powerful Thunder Breathing techniques that reveal just how skilled he truly is.";
}

function changeLogo() {
  document.getElementById("demonslayer").src = "images/demonslayerlogo.png";
}
function resetAll() {
  document.getElementById("resetbutton").src = "images/resetbutton.png";
  document.getElementById("demonslayer").src = "images/demonslayerlogo.png";
  document.getElementById("demonslayer").classList.add("shadow");
  document.getElementById("inosuke").src = "images/inosukefunny.jpg";
  document.getElementById("inosuke").classList.remove("shadow");
  document.getElementById("tanjiro").src = "images/tanjirofunny.png";
  document.getElementById("tanjiro").classList.remove("shadow");
  document.getElementById("zenitsu").src = "images/zenitsufunny.avif";
  document.getElementById("zenitsu").classList.remove("shadow");
  document.getElementById("slayer-info").textContent =
    "Demon Slayer is a Japanese anime and manga series that follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons. His younger sister Nezuko survives but is turned into a demon herself. Determined to save her and defeat the creature who destroyed their family, Tanjiro joins the Demon Slayer Corps, a secret group of warriors who hunt demons using special sword techniques called Breathing Styles";
}
