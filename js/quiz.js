// ============================================
// WARRIORS — Lore Quiz
// ============================================
(function () {
  var QUESTIONS = [
    {
      q: "How many Clans are there in the Warriors series?",
      a: ["Four", "Five", "Six", "Seven"],
      c: 1,
      why: "Four forest Clans — ThunderClan, ShadowClan, RiverClan and WindClan — plus the lost fifth, SkyClan."
    },
    {
      q: "What is the name of the afterlife, where the spirits of dead cats live?",
      a: ["Silverpelt", "StarClan", "The Silent Forest", "The Two Paths"],
      c: 1,
      why: "StarClan lives in the night sky. It can send omens, guide living cats, and even descend to help them in a desperate battle."
    },
    {
      q: "In Clan vocabulary, what is a car most often called?",
      a: ["A monster", "A twoleg", "A deathclaw", "A silverpelt"],
      c: 0,
      why: "Cars are monsters. Humans are twolegs, months are moons, and distances are measured in animal lengths."
    },
    {
      q: "Which cat was the main protagonist of The Prophecies Begin?",
      a: ["Tigerclaw", "Bluestar", "Firestar", "Graystripe"],
      c: 2,
      why: "Firestar — born a housecat named Rusty — joins ThunderClan and becomes one of its greatest leaders."
    },
    {
      q: "What is the name of the sixth book of the series, the end of The Prophecies Begin?",
      a: ["The Darkest Hour", "Night Whispers", "A Dangerous Path", "Rising Storm"],
      c: 0,
      why: "The Darkest Hour (2004) closes the first arc, and it is where Firestar finally defeats Scourge."
    },
    {
      q: "How many laws are in the original Warrior Code?",
      a: ["Ten", "Twelve", "Fourteen", "Sixteen"],
      c: 3,
      why: "Sixteen laws — later reorganised into fourteen by the revised Code created after The Broken Code."
    },
    {
      q: "Which law of the Warrior Code says the word of the Clan leader is the code?",
      a: ["Law 12", "Law 13", "Law 15", "Law 16"],
      c: 1,
      why: "Law 13: \"The word of the Clan leader is the warrior code.\""
    },
    {
      q: "Which arc is set BEFORE the events of The Prophecies Begin?",
      a: ["Dawn of the Clans", "The New Prophecy", "Power of Three", "Omen of the Stars"],
      c: 0,
      why: "Dawn of the Clans (2013–2015) tells the story of how the Clans were founded — generations before Fireheart."
    },
    {
      q: "Which Clan's territory is in the open moorland, where the wind never stops?",
      a: ["ThunderClan", "ShadowClan", "WindClan", "RiverClan"],
      c: 2,
      why: "WindClan lives up on the moorland. ThunderClan is in the forest, ShadowClan in the pines, RiverClan on the river."
    },
    {
      q: "In which arc do the spirit cats from the Dark Forest step out of dreams and into the real world?",
      a: ["Power of Three", "Omen of the Stars", "The Broken Code", "A Vision of Shadows"],
      c: 1,
      why: "Omen of the Stars — and it is in that arc that StarClan descends from the sky to fight them."
    },
    {
      q: "Which cat was the medicine cat who could feel the pain of other cats, and was forced to give up being a warrior?",
      a: ["Spottedleaf", "Yellowfang", "Leafpool", "Mothwing"],
      c: 1,
      why: "Yellowfang — former ShadowClan medicine cat, mother of Brokenstar, and mother of Bluestar's kits."
    },
    {
      q: "Which hero of The Broken Code gave her life to defeat Ashfur, in a way that killed her spirit too?",
      a: ["Ivypool", "Bristlefrost", "Shadowsight", "Sparrowpelt"],
      c: 1,
      why: "Bristlefrost. It is one of the most heartbreaking endings in the whole series."
    },
    {
      q: "What is the name of the group of cats who live in a human town and are led by Scourge?",
      a: ["The Tribe", "The BloodClan", "The Rogue Clans", "The Sisters"],
      c: 1,
      why: "The BloodClan. Scourge rules them with reinforced claws and terror, and he is the main villain of the first arc."
    },
    {
      q: "Which series arc runs from 2022 to 2024 and is called A Starless Clan?",
      a: ["The Broken Code", "A Vision of Shadows", "Changing Skies", "A Starless Clan"],
      c: 3,
      why: "A Starless Clan — in which RiverClan's leader and deputy die in quick succession and even StarClan doesn't know who should lead."
    },
    {
      q: "What is the name of the current, still-running ninth arc?",
      a: ["Changing Skies", "The Silent Thaw", "Path of Stars", "The Elders' Quest"],
      c: 0,
      why: "Changing Skies (2025–), which began with The Elders' Quest and includes Hidden Moon, Chasing Shadows and Guiding Light."
    }
  ];

  var RANKS = [
    { min: 15, name: "Firestar of the Clans", note: "Perfect. You have read every book twice. StarClan salutes you." },
    { min: 12, name: "StarClan's Chosen", note: "You know your lore cold. Very few cats could pass that." },
    { min: 9, name: "Elder of the Clans", note: "Solid knowledge — you could lead a Gathering and hold your own." },
    { min: 6, name: "Apprentice Warrior", note: "You know the shape of the story. Time to read a few more." },
    { min: 0, name: "Fresh Kit", note: "Every warrior starts as a kit. Go read Into the Wild and come back!" }
  ];

  var root = document.getElementById('quizRoot');
  var bar = document.getElementById('qBar');
  var count = document.getElementById('qCount');
  var area = document.getElementById('qArea');
  var idx = 0, score = 0;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderQuestion() {
    var item = QUESTIONS[idx];
    count.textContent = 'Question ' + (idx + 1) + ' of ' + QUESTIONS.length;
    bar.style.width = (idx / QUESTIONS.length * 100) + '%';

    var html = '<div class="q-text">' + esc(item.q) + '</div><div class="q-opts">';
    item.a.forEach(function (opt, i) {
      html += '<button class="q-opt" type="button" data-i="' + i + '">' + esc(opt) + '</button>';
    });
    html += '</div><div id="qFb"></div>';
    area.innerHTML = html;

    area.querySelectorAll('.q-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chosen = parseInt(btn.getAttribute('data-i'), 10);
        var correct = item.c;
        area.querySelectorAll('.q-opt').forEach(function (b, i) {
          b.disabled = true;
          if (i === correct) b.classList.add('right');
          else if (i === chosen) b.classList.add('wrong');
        });
        if (chosen === correct) score++;
        var fb = document.getElementById('qFb');
        fb.innerHTML = '<div class="q-feedback">' +
          (chosen === correct ? '✅ Correct! ' : '❌ Not quite. ') +
          esc(item.why) + '</div>' +
          '<button class="q-next" type="button">' +
          (idx === QUESTIONS.length - 1 ? 'See my score →' : 'Next question →') +
          '</button>';
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
    var rank = RANKS[0];
    for (var i = 0; i < RANKS.length; i++) {
      if (score >= RANKS[i].min) { rank = RANKS[i]; break; }
    }
    area.innerHTML =
      '<div class="q-result">' +
      '<div class="rank">🏆 ' + esc(rank.name) + '</div>' +
      '<div class="score">You scored <b>' + score + ' / ' + QUESTIONS.length + '</b><br>' + esc(rank.note) + '</div>' +
      '<button class="q-next" type="button" id="qRestart">Try again</button>' +
      '<p style="margin-top:22px"><a href="clan-quiz.html">🐾 Next: Which Clan are you? →</a></p>' +
      '</div>';
    document.getElementById('qRestart').addEventListener('click', function () {
      idx = 0; score = 0; renderQuestion();
    });
  }

  renderQuestion();
})();
