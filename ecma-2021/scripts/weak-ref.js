function counter(element) {
  const ref = new WeakRef(element);
  let count = 0;

  const interval = setInterval(() => {
    const element = ref.deref();

    if (element) {
      element.textContent = ++count;

      // 대상 element가 사라지면 아래 블록이 실행
    } else {
      console.log("The element is gone.");
      clearInterval(interval);
    }
  }, 1000);
}

counter(document.getElementById("counter"));

// 일정시간 뒤에 element를 제거
setTimeout(() => {
  document.getElementById("counter").remove();
}, 3000);