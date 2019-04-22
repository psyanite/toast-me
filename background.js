const quotes = [
  `Do not discourage yourself with what you haven't done, encourage yourself with what you will do`,
  `Love the life you live. Live the life you love.`,
  `To be yourself in a world that is constantly trying to make you one of them is life's greatest accomplishment.`,
  `Failure is not the opposite of Success. It is the sole ingredient of Success`,
  `Ignore others for they are only dust. No one imagines what dust thinks or feels.`,
  `I can. I will. I must.`,
  `It always seems impossible until it's done.`,
  `How many success stories do you need to hear before you make your own?`,
  `The attitude you bring to the day is what the day will bring you. Great Attitude. Great Day.`,
  `The key to success, is to focus on the process, not the goals.`,
  `Mindset is what separates the best from the rest.`,
  `The struggle ends when the gratitude begins.`,
  `Happiness is not the absence of problems, it's the ability to deal with them.`,
  `Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.`,
  `Life is a series of building, testing, changing and iterating.`,
  `You never know how strong you are until being strong is the only choice you have.`,
  `Do not fear the winds of adversity. Remember, a kite rises against the wind rather than with it.`,
  `Deciding what not to do is as important as deciding what to do.`,
  `Be curious about everything. Never stop learning. Never stop growing.`,
  `Live in the present and make it so beautiful that it’s worth remembering.”`,
  `There’s power in looking silly and not caring that you do.`,
  `If you want something you've never had, you must be willing to do something you've never done.`,
  `Passion is energy. Feel the power that comes from focusing what excites you.`,
  `It's not the years in your life that count. It's the life in your years.`,
  `Continuous improvement is better than delayed perfection.`,
  `If my mind can conceive it and my heart can believe it, then I can achieve it.`,
  `Always do what you are afraid to do.`,
  `Argue for your limitations, and surely they’re yours.`,
  `There is no such thing as failure, just lessons to be learnt on the way.`,
  `We deem those happy who from the experience of life have learned to bear its ills without being overcome by them.`,
  `To reach your greatest potential you'll have to fight your greatest fears.`,
  `Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.`,
  `When we seek to discover the best in others, we somehow bring out the best in ourselves.`,
  `Spend more time smiling than frowning and more time praising than criticizing.`,
  `People do not seem to realize that their opinion of the world is also a confession of character.`,
  `Kind words can be short and easy to speak, but their echoes are truly endless.`,
  `This world is but a canvas to our imagination.`,
  `Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.`,
  `Live the wonderful life that is in you.`,
  `Nothing will bring you peace, you must bring yourself to it.`,
  `Everything you can imagine is real.`,
  `Don't limit your challenges - challenge your limits.`,
  `Laughter is the shortest distance between two people.`,
  `Create something today even if it sucks.`,
  `The death of a dream is the day that you stop believing in the work it takes to get there.`,
  `You may not control all the events that happen to you, but you can decide not to be reduced by them.`,
  `It doesn't matter where you start. Only that you begin.`,
  `Let us make our future now, and let us make our dreams tomorrow's reality.`,
  `Remember that wherever your heart is, there you will find your treasure.`,
  `If you keep on doing what you've always done, you will keep getting what you've always gotten.`,
  `When you wake up in the morning you have two choices: go back to sleep, or wake up and chase those dreams.`,
  `Success isn't about being the best. It's about always getting better.`,
  `Pleasure in the job puts perfection in the work.`,
  `Stop being afraid of what could go wrong and start being positive about what could go right.`,
  `It is our choices that show what we truly are, far more than our abilities.`,
  `Peace in the world is everybody's business, no matter where you live or what you do.”`,
  `To be beautiful means to be yourself. You don't need to be accepted by others. You need to be yourself.`,
  `Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.`,
  `It's not who you think you are that holds you back it's who you think you're not.`,
  `What one has to do usually can be done.`,
  `You don't have to be great to start, but you have to start to be great.`,
  `People who are unable to motivate themselves must be content with mediocrity no matter how impressive their other talents.`,
  `Whenever you are confronted with an opponent, conquer them with love.”`,
  `No matter how bad or slow things go, you're still way ahead of everyone who isn't even trying.`,
  `Knowing what must be done does away with fear.`,
  `What are the most powerful words in the universe? The ones you use to talk to yourself.”`,
  `It is never too late to be what you might have been.`,
  `Think lightly of yourself and deeply of the world.`,
  `You can be happy or you can be unhappy. It's just according to the way you look at things.`,
  `If you stumble make it part of the dance.`,
  `Change your life today. Don't gamble on the future, act now, without delay.`,
  `Our attitude toward life determines life's attitude towards us.`,
  `The greatest mistake you can make in life is to be continually fearing you will make one.`,
  `You are never too old to set another goal or to dream a new dream.`,
  `If we did all the things we are capable of, we would literally astound ourselves.`,
  `Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.`,
  `Follow your instincts. That's where true wisdom manifests itself.”`,
  `Nothing is so fatiguing as the eternal hanging on of an uncompleted task.`,
  `The universe reveals its secrets to those who dare to follow their hearts.`,
];

function showNotification() {
  const time = /(..)(:..)/.exec(new Date());
  const hour = time[1] % 12 || 12;
  const period = time[1] < 12 ? 'a.m.' : 'p.m.';
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  new Notification(hour + time[2] + ' ' + period, {
    icon: '48.png',
    body: randomQuote
  });
}

function theTimeIsRight() {
  const time = new Date();
  return (time.getMinutes() % 30) === 0;
}

if (!localStorage.isInitialized) {
  localStorage.isActivated = true;
  localStorage.frequency = 1;
  localStorage.isInitialized = true;
}

if (window.Notification) {

  if (JSON.parse(localStorage.isActivated)) { showNotification(); }

  let interval = 0;

  setInterval(function() {
    interval++;
    if (
      JSON.parse(localStorage.isActivated) &&
      localStorage.frequency <= interval &&
      theTimeIsRight()
    ) {
      showNotification();
      interval = 0;
    }
  }, 60000);
}
