const text = document.querySelector(".text");
const author = document.querySelector(".author");

const phrase = [
  {
    text: '"들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다."',
    author: "공자",
  },
  {
    text: '"실패를 걱정하지 말고 부지런히 목표를 향하여 노력하라. 노력한 만큼 보상을 받을 것이다."',
    author: "노만 V. 필",
  },
  {
    text: '"우리의 인생은 우리가 노력한 만큼 가치가 있다."',
    author: "모리악",
  },
  {
    text: '"실패를 걱정하지 말고 부지런히 목표를 향하여 노력하라. 노력한 만큼 보상을 받을 것이다."',
    author: "노만 V. 필",
  },
  {
    text: '"성공이란 결과로 측정하는게 아니라 그것에 소비한 노력의 총계로 따져야 할 것이다."',
    author: "에디슨",
  },
  {
    text: '"실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다."',
    author: "메리 케이 애쉬",
  },
];

const headerContent = () => {
  const randomIndex = Math.floor(Math.random() * phrase.length);
  const randomContent = phrase[randomIndex];

  text.textContent = randomContent.text;
  author.textContent = `- ${randomContent.author} -`;
};

headerContent();

// work
const workItems = document.querySelectorAll(".work__item");
const workModals = document.querySelectorAll(".work__modal");
const closeBtns = document.querySelectorAll(".close");

function modalOpen(num) {
  console.log("before" + num);
  console.log(workModals[num]);
  workItems[num].addEventListener("click", (e) => {
    if (e.defaultPrevented) return;
    if (workModals[num]) {
      workModals[num].classList.remove("hidden");
      console.log("after" + num);
      console.log(workModals[num].classList);
    }
  });
}

function modalClose(num) {
  if (closeBtns[num]) {
    closeBtns[num].addEventListener("click", (e) => {
      e.stopPropagation();
      if (workModals[num]) {
        workModals[num].classList.add("hidden");
      }
    });
  }

  workModals[num].addEventListener("click", (e) => {
    e.stopPropagation();
    if (workModals[num]) {
      workModals[num].classList.add("hidden");
    }
  });
}

for (let i = 0; i < workItems.length; i++) {
  modalOpen(i);
  modalClose(i);
}
