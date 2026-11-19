(() => {
  const $ = (id) => document.getElementById(id);
  const mean = $('sample-mean');
  const size = $('sample-size');
  const sd = $('population-sd');
  const format = (n) => Number(n).toFixed(3);

  function updateLab() {
    const xbar = Number(mean.value);
    const n = Number(size.value);
    const sigma = Number(sd.value);
    const mu0 = 30;
    const standardError = sigma / Math.sqrt(n);
    const z = (xbar - mu0) / standardError;
    $('mean-output').textContent = xbar + ' min';
    $('size-output').textContent = n;
    $('sd-output').textContent = sigma + ' min';
    $('z-result').textContent = format(z);
    $('se-result').textContent = format(standardError);
    $('diff-result').textContent = (xbar - mu0).toFixed(1) + ' min';
    const clipped = Math.max(-3, Math.min(3, z));
    const px = 160 + clipped * 43;
    $('z-marker').setAttribute('x1', px);
    $('z-marker').setAttribute('x2', px);
    $('z-marker-dot').setAttribute('cx', px);
    const direction = xbar === mu0 ? 'exactly equal to' : xbar > mu0 ? 'above' : 'below';
    const difference = Math.abs(xbar - mu0).toFixed(1);
    $('lab-insight-text').textContent = xbar === mu0
      ? 'Your sample mean matches the hypothesized mean. The Z statistic is zero, regardless of the standard error.'
      : `Your sample mean is ${difference} minutes ${direction} the claim. The standard error is ${format(standardError)} minutes, so the observed difference is ${Math.abs(z).toFixed(2)} standard errors from the hypothesized mean.`;
  }
  [mean, size, sd].forEach((input) => input.addEventListener('input', updateLab));
  updateLab();

  $('show-more-theory').addEventListener('click', () => {
    const panel = $('more-theory');
    const opening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden');
    $('show-more-theory').innerHTML = opening
      ? 'Hide the deeper explanation <span>−</span>'
      : 'Read the deeper explanation <span>＋</span>';
  });

  let earned = false;
  const answers = [...document.querySelectorAll('.answer')];
  const feedback = $('answer-feedback');
  const status = $('question-status');
  answers.forEach((button) => button.addEventListener('click', () => {
    const selected = button.dataset.answer;
    answers.forEach((item) => item.classList.remove('correct', 'incorrect'));
    button.classList.add(selected === 'b' ? 'correct' : 'incorrect');
    feedback.classList.remove('hidden', 'wrong');
    if (selected === 'b') {
      feedback.innerHTML = '<strong>Correct — this is a two-tailed test.</strong>1. The null claim is that the population mean equals 5 pounds. 2. The question asks whether the mean is “different,” without saying higher or lower. 3. “Different” includes both directions. 4. The alternative is therefore H₁: μ ≠ 5. The equality belongs in the null hypothesis.';
      if (!earned) {
        earned = true;
        $('xp-total').textContent = '10 XP';
        status.textContent = 'Correct! You earned 10 XP.';
      } else status.textContent = 'Correct answer.';
    } else {
      feedback.classList.add('wrong');
      feedback.innerHTML = '<strong>Not quite. Look at the wording.</strong>The key word is “different.” It does not specify an increase or a decrease, so the alternative must allow either direction. Try option B.';
      status.textContent = 'Review the explanation and try again.';
    }
  }));
  $('reset-question').addEventListener('click', () => {
    answers.forEach((item) => item.classList.remove('correct', 'incorrect'));
    feedback.classList.add('hidden');
    feedback.classList.remove('wrong');
    status.textContent = 'Choose an answer to see your explanation.';
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
})();