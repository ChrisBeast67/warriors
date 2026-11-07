// ============================================
// WARRIORS — "Which Clan are you?" personality quiz
// ============================================
(function () {
  var CLANS = {
    thunder: {
      name: 'ThunderClan',
      emoji: '⚡',
      title: 'Leader of the Pack',
      text: 'You are bold, proud and a natural leader. You walk into a room and expect it to organise itself around you — usually it does. You care about your people deeply, and you will fight anyone who threatens them. The catch? You can be arrogant, and you hate admitting you were wrong.',
      match: 'Firestar, Bluestar, Bramblestar',
      color: '#f5a623'
    },
    shadow: {
      name: 'ShadowClan',
      emoji: '🌑',
      title: 'The Silent Watcher',
      text: 'You notice everything. You keep your thoughts to yourself, you do not trust easily, and you would rather watch a situation than get tangled in it. When you finally act, it is devastating and precise. People call you cold; you just know that every word costs something.',
      match: 'Rowanclaw, Brokenstar, Shadowsight',
      color: '#9aa596'
    },
    river: {
      name: 'RiverClan',
      emoji: '🌊',
      title: 'The Practical One',
      text: 'You are smart, adaptable and a little bit cheeky. You read the room fast and you know how to get things done — but you are not sentimental about it. Underneath the swagger you are fiercely loyal to your friends, and you work best when you have room to move.',
      match: 'Feathertail, Silverstream, Cinderpelt',
      color: '#4fa3d1'
    },
    wind: {
      name: 'WindClan',
      emoji: '☁️',
      title: 'The Free Spirit',
      text: 'You are independent, stubborn and allergic to being told what to do. You would rather do things your own way, even the hard way. You are not being difficult — you genuinely do not understand why everything has to be done a certain way. Freedom is your whole religion.',
      match: 'Tallstar, Crowfeather, Starlingflight',
      color: '#8cc63f'
    },
    sky: {
      name: 'SkyClan',
      emoji: '⭐',
      title: 'The Wanderer',
      text: 'You never quite fit where you are. You are the one who looks at the map and asks "what is over that hill?", even when nobody else will come with you. It makes life harder, but you bring something the settled cats never have: a whole new way of seeing the world.',
      match: 'Tree, Violetshine, Leafstar',
      color: '#dfe9ff'
    }
  };

  var QUESTIONS = [
    {
      q: 'A new hunting ground opens up on the edge of your territory. What do you do?',
      a: [
        { t: 'Claim it immediately and tell everyone it is mine', c: 'thunder' },
        { t: 'Move into it quietly and keep it to myself', c: 'shadow' },
        { t: 'Work out how many cats it can feed, then split it fairly', c: 'river' },
        { t: 'Leave the Clans behind and see what is out there', c: 'wind' },
        { t: 'Look for somewhere nobody has been and go there', c: 'sky' }
      ]
    },
    {
      q: 'Your leader asks you to do something you think is wrong. You…',
      a: [
        { t: 'Do it. It is not my place to argue with the leader', c: 'thunder' },
        { t: 'Do it, but I will deal with it my own way afterwards', c: 'shadow' },
        { t: 'Say plainly that I think it is wrong, and why', c: 'river' },
        { t: 'Refuse. I will not do something I do not believe in', c: 'wind' },
        { t: 'Say nothing, and then find another way to fix it', c: 'sky' }
      ]
    },
    {
      q: 'Which do you value most?',
      a: [
        { t: 'Being respected', c: 'thunder' },
        { t: 'Being left alone', c: 'shadow' },
        { t: 'Being useful', c: 'river' },
        { t: 'Being free', c: 'wind' },
        { t: 'Being understood', c: 'sky' }
      ]
    },
    {
      q: 'A friend is in danger. You…',
      a: [
        { t: 'Lead the whole Clan to them, right now', c: 'thunder' },
        { t: 'Go alone — fewer cats, less noise', c: 'shadow' },
        { t: 'Get the fastest hunters and make a plan', c: 'river' },
        { t: 'Go, and hope the path I know is the fast one', c: 'wind' },
        { t: 'Go, even though nobody knows where they are', c: 'sky' }
      ]
    },
    {
      q: 'Your Clan is offered an alliance with another Clan. You…',
      a: [
        { t: 'Accept immediately. An alliance makes us stronger', c: 'thunder' },
        { t: 'Accept, but I will be watching them', c: 'shadow' },
        { t: 'Ask what we get out of it first', c: 'river' },
        { t: 'Ask why we need them at all', c: 'wind' },
        { t: 'Accept — but I want to see their home first', c: 'sky' }
      ]
    },
    {
      q: 'There is a rumour about you that is not true. You…',
      a: [
        { t: 'Demand the Clans know the truth, publicly', c: 'thunder' },
        { t: 'Say nothing. It will pass', c: 'shadow' },
        { t: 'Find out who started it and handle it', c: 'river' },
        { t: 'Laugh it off and keep walking', c: 'wind' },
        { t: 'Wonder why people keep inventing stories about me', c: 'sky' }
      ]
    },
    {
      q: 'Your favourite place in the world is…',
      a: [
        { t: 'The top of the tallest oak, looking over everything', c: 'thunder' },
        { t: 'A quiet pine shadow where nobody follows', c: 'shadow' },
        { t: 'The riverbank at dawn, when the water is fastest', c: 'river' },
        { t: 'The open moor, where the wind can push you', c: 'wind' },
        { t: 'The top of a tree you have never climbed before', c: 'sky' }
      ]
    },
    {
      q: 'The Warrior Code is being changed. You…',
      a: [
        { t: 'Make sure the strongest rules end up at the top', c: 'thunder' },
        { t: 'Watch carefully before deciding it is safe', c: 'shadow' },
        { t: 'Ask what the change actually does for the cats', c: 'river' },
        { t: 'Ask why the Code needs changing at all', c: 'wind' },
        { t: 'Support the change that makes room for new Clans', c: 'sky' }
      ]
    },
    {
      q: 'Your biggest fear is…',
      a: [
        { t: 'Failing my Clan', c: 'thunder' },
        { t: 'Being found out', c: 'shadow' },
        { t: 'Being useless', c: 'river' },
        { t: 'Being trapped', c: 'wind' },
        { t: 'Never finding where I belong', c: 'sky' }
      ]
    },
    {
      q: 'A story is told about you after you are gone. You hope it says…',
      a: [
        { t: 'That I led, and I led well', c: 'thunder' },
        { t: 'That I was there, and I got the job done', c: 'shadow' },
        { t: 'That I was useful to my Clan and my friends', c: 'river' },
        { t: 'That I never let anyone put me in a box', c: 'wind' },
        { t: 'That I opened a path nobody knew was there', c: 'sky' }
      ]
    }
  ];

  var root = document.getElementById('quizRoot');
  var bar = document.getElementById('qBar');
  var count = document.getElementById('qCount');
  var area = document.getElementById('qArea');
  var idx = 0, totals = {};

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderQuestion() {
    var item = QUESTIONS[idx];
    count.textContent = 'Question ' + (idx + 1) + ' of ' + QUESTIONS.length;
    bar.style.width = (idx / QUESTIONS.length * 100) + '%';

    var html = '<div class="q-text">' + esc(item.q) + '</div><div class="q-opts">';
    item.a.forEach(function (opt, i) {
      html += '<button class="q-opt" type="button" data-i="' + i + '">' + esc(opt.t) + '</button>';
    });
    html += '</div><div id="qFb"></div>';
    area.innerHTML = html;

    area.querySelectorAll('.q-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chosen = item.a[parseInt(btn.getAttribute('data-i'), 10)];
        totals[chosen.c] = (totals[chosen.c] || 0) + 1;
        var fb = document.getElementById('qFb');
        fb.innerHTML = '<div class="q-feedback">🐾 Noted. One more?</div>' +
          '<button class="q-next" type="button">' +
          (idx === QUESTIONS.length - 1 ? 'Reveal my Clan →' : 'Next question →') +
          '</button>';
        area.querySelectorAll('.q-opt').forEach(function (b) { b.disabled = true; });
        fb.querySelector('.q-next').addEventListener('click', function () {
          idx++;
          if (idx >= QUESTIONS.length) renderResult();
          else renderQuestion();
        });
        bar.style.width = ((idx + 1) / QUESTIONS.length * 100) + '%';
      });
    });
  }

  function renderResult() {
    count.textContent = 'Finished!';
    bar.style.width = '100%';
    var best = 'thunder', bestN = -1;
    Object.keys(totals).forEach(function (k) {
      if (totals[k] > bestN) { bestN = totals[k]; best = k; }
    });
    var clan = CLANS[best];
    var order = Object.keys(CLANS).sort(function (a, b) { return (totals[b] || 0) - (totals[a] || 0); });
    var breakdown = order.map(function (k) {
      return CLANS[k].emoji + ' ' + CLANS[k].name + ': <b>' + (totals[k] || 0) + '</b>';
    }).join(' &nbsp;•&nbsp; ');

    area.innerHTML =
      '<div class="q-result">' +
      '<div class="rank" style="color:' + clan.color + '">' + clan.emoji + ' ' + esc(clan.name) + '</div>' +
      '<div class="score">' + esc(clan.title) + '</div>' +
      '<div class="card" style="text-align:left;margin:22px 0">' +
      '<p class="muted">' + esc(clan.text) + '</p>' +
      '<p class="muted" style="margin-top:12px"><b>You\'re most like:</b> ' + esc(clan.match) + '</p>' +
      '</div>' +
      '<div class="muted" style="font-size:.92rem;margin-bottom:20px">' + breakdown + '</div>' +
      '<button class="q-next" type="button" id="qRestart">Take it again</button>' +
      '<p style="margin-top:22px"><a href="quiz.html">🐾 Try the lore quiz too →</a></p>' +
      '</div>';
    document.getElementById('qRestart').addEventListener('click', function () {
      idx = 0; totals = {}; renderQuestion();
    });
  }

  renderQuestion();
})();
