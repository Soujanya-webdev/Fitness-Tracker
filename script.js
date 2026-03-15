// ==================== DATA ====================
const exercises = [
  {id:1,name:'Push-ups',emoji:'💪',muscle:'Chest / Triceps',sport:'All Sports',level:'Beginner',type:'upper',desc:'The foundation of upper body training. Builds chest, shoulder, and tricep strength.',reps:'3×15 reps',timer:null},
  {id:2,name:'Shuttle Runs',emoji:'⚡',muscle:'Full Body / Speed',sport:'Football / Athletics',level:'Intermediate',type:'cardio',desc:'Explosive sprint drill that builds acceleration, deceleration, and agility.',reps:'5 sets × 20m',timer:30},
  {id:3,name:'Plank Hold',emoji:'🧘',muscle:'Core / Abs',sport:'All Sports',level:'Beginner',type:'core',desc:'The ultimate core stabilizer. Builds the foundation for every athletic movement.',reps:'Hold 45–60 sec',timer:45},
  {id:4,name:'Bulgarian Split Squat',emoji:'🦵',muscle:'Quads / Glutes',sport:'Football / Basketball',level:'Intermediate',type:'lower',desc:'Single-leg powerhouse movement for explosive leg strength and balance.',reps:'3×12 each leg',timer:null},
  {id:5,name:'Burpees',emoji:'🔥',muscle:'Full Body / Cardio',sport:'All Sports',level:'Intermediate',type:'cardio',desc:'The ultimate conditioning exercise. Builds strength and cardiovascular endurance.',reps:'4×10 reps',timer:null},
  {id:6,name:'Romanian Deadlift',emoji:'🏋️',muscle:'Hamstrings / Lower Back',sport:'Athletics / Gym',level:'Intermediate',type:'lower',desc:'Builds posterior chain strength essential for speed and power athletes.',reps:'3×10 reps',timer:null},
  {id:7,name:'Mountain Climbers',emoji:'🧗',muscle:'Core / Cardio',sport:'All Sports',level:'Beginner',type:'core',desc:'High-intensity core exercise that doubles as a cardio drill.',reps:'3×30 sec',timer:30},
  {id:8,name:'Pull-ups',emoji:'🦅',muscle:'Back / Biceps',sport:'Basketball / Gym',level:'Intermediate',type:'upper',desc:'The king of upper body pulling movements. Builds lat width and grip strength.',reps:'3×Max reps',timer:null},
  {id:9,name:'Box Jumps',emoji:'📦',muscle:'Quads / Power',sport:'Basketball / Athletics',level:'Intermediate',type:'lower',desc:'Plyometric power builder for explosive vertical and horizontal jumps.',reps:'4×8 reps',timer:null},
  {id:10,name:'High Knees',emoji:'🏃',muscle:'Hip Flexors / Cardio',sport:'Football / Athletics',level:'Beginner',type:'cardio',desc:'Running drill that improves stride frequency and hip flexor strength.',reps:'3×30 sec',timer:30},
  {id:11,name:'Tricep Dips',emoji:'💺',muscle:'Triceps / Chest',sport:'All Sports',level:'Beginner',type:'upper',desc:'Bodyweight tricep builder using a chair or parallel bars.',reps:'3×12 reps',timer:null},
  {id:12,name:'Lateral Lunges',emoji:'↔️',muscle:'Adductors / Quads',sport:'Badminton / Cricket',level:'Beginner',type:'lower',desc:'Builds lateral movement strength and flexibility, critical for court sports.',reps:'3×10 each side',timer:null},
];

const workoutsByGoal = {
  'Speed':      [{name:'Sprint Intervals',detail:'6×30m @ 95% effort',emoji:'⚡'},{name:'Plyometric Jumps',detail:'4×8 box jumps',emoji:'📦'},{name:'Shuttle Runs',detail:'5 sets × 20m',emoji:'🏃'},{name:'High Knees',detail:'3×30 sec max speed',emoji:'🔥'}],
  'Endurance':  [{name:'Tempo Run',detail:'20 min @ 70% max HR',emoji:'🫁'},{name:'Burpees',detail:'4×12 reps',emoji:'🔥'},{name:'Mountain Climbers',detail:'4×45 sec',emoji:'🧗'},{name:'Jump Rope',detail:'5×60 sec',emoji:'🪢'}],
  'Strength':   [{name:'Push-up Variations',detail:'4×15 reps',emoji:'💪'},{name:'Romanian Deadlift',detail:'4×8 reps',emoji:'🏋️'},{name:'Bulgarian Split Squat',detail:'3×10 each',emoji:'🦵'},{name:'Pull-ups',detail:'4×Max reps',emoji:'🦅'}],
  'Agility':    [{name:'Lateral Shuffles',detail:'5×20m',emoji:'↔️'},{name:'Cone Drills',detail:'3×3 min',emoji:'🔺'},{name:'Reaction Jumps',detail:'4×10 reps',emoji:'⚡'},{name:'T-Drill Run',detail:'5×45 sec',emoji:'🏃'}],
  'Fat Loss':   [{name:'HIIT Burpees',detail:'5×10 reps',emoji:'🔥'},{name:'Jump Squats',detail:'4×15 reps',emoji:'💪'},{name:'Mountain Climbers',detail:'4×45 sec',emoji:'🧗'},{name:'High Knees',detail:'5×30 sec',emoji:'🏃'}],
  'General Fitness':[{name:'Push-ups',detail:'3×15 reps',emoji:'💪'},{name:'Plank Hold',detail:'3×45 sec',emoji:'🧘'},{name:'Bodyweight Squats',detail:'3×20 reps',emoji:'🦵'},{name:'Jumping Jacks',detail:'3×60 sec',emoji:'⭐'}],
};

const sportEmojis = {Football:'⚽',Cricket:'🏏',Basketball:'🏀',Athletics:'🏃‍♂️',Badminton:'🏸','Gym Fitness':'🏋️'};

const plans = [
  {name:'7-Day Beginner Kickstart',icon:'🌱',color:'green',desc:'Perfect for those just starting their fitness journey. Low intensity, full body.',days:7,total:'45 min/day',schedule:['Full Body Strength','Active Rest: Walk','Upper Body Focus','Lower Body Focus','Rest Day 😴','Core & Cardio','Flexibility Flow']},
  {name:'Fat Burn Blitz',icon:'🔥',color:'orange',desc:'High-intensity plan designed to maximize calorie burn and body composition.',days:6,total:'55 min/day',schedule:['HIIT Cardio Blast','Strength Circuit','Sprint Training','Active Recovery','Power Conditioning','Full Body HIIT','Rest Day 😴']},
  {name:'Muscle & Power Builder',icon:'💪',color:'blue',desc:'Progressive overload plan for building functional strength and muscle.',days:5,total:'65 min/day',schedule:['Push Day','Pull Day','Leg Day','Rest Day 😴','Full Body Power','Athletic Conditioning','Rest Day 😴']},
  {name:'Home Warrior',icon:'🏠',color:'red',desc:'Zero equipment. Maximum results. Full workout plan you can do anywhere.',days:7,total:'40 min/day',schedule:['Bodyweight Circuit','Yoga & Mobility','Push Workout','Rest Day 😴','HIIT Cardio','Pull & Core','Stretch & Recovery']},
];

// Exercises for each plan keyed by plan name
const planExercises = {
  '7-Day Beginner Kickstart': [
    {name:'Bodyweight Squats',   detail:'3×15 reps',  emoji:'🦵'},
    {name:'Knee Push-ups',       detail:'3×10 reps',  emoji:'💪'},
    {name:'Plank Hold',          detail:'3×20 sec',   emoji:'🧘'},
    {name:'Glute Bridges',       detail:'3×15 reps',  emoji:'🍑'},
    {name:'Standing March',      detail:'2×40 steps', emoji:'🚶'},
    {name:'Child\'s Pose Stretch',detail:'2×30 sec',  emoji:'🙇'},
  ],
  'Fat Burn Blitz': [
    {name:'Burpees',             detail:'5×10 reps',  emoji:'🔥'},
    {name:'Jump Squats',         detail:'4×15 reps',  emoji:'⬆️'},
    {name:'Mountain Climbers',   detail:'4×40 sec',   emoji:'🧗'},
    {name:'High Knees',          detail:'5×30 sec',   emoji:'🏃'},
    {name:'Jumping Jacks',       detail:'3×60 sec',   emoji:'⭐'},
    {name:'Sprint Intervals',    detail:'6×20 sec',   emoji:'⚡'},
  ],
  'Muscle & Power Builder': [
    {name:'Push-ups',            detail:'4×15 reps',  emoji:'💪'},
    {name:'Pull-ups',            detail:'4×Max reps', emoji:'🦅'},
    {name:'Bulgarian Split Squat',detail:'3×10 each', emoji:'🦵'},
    {name:'Romanian Deadlift',   detail:'4×8 reps',   emoji:'🏋️'},
    {name:'Diamond Push-ups',    detail:'3×12 reps',  emoji:'💎'},
    {name:'Box Jumps',           detail:'4×8 reps',   emoji:'📦'},
  ],
  'Home Warrior': [
    {name:'Bodyweight Circuit',  detail:'4 rounds',   emoji:'🏠'},
    {name:'Tricep Dips (Chair)', detail:'3×12 reps',  emoji:'💺'},
    {name:'Lateral Lunges',      detail:'3×10 each',  emoji:'↔️'},
    {name:'Plank to Push-up',    detail:'3×8 reps',   emoji:'🧘'},
    {name:'Reverse Lunges',      detail:'3×12 each',  emoji:'🦵'},
    {name:'Superman Hold',       detail:'3×30 sec',   emoji:'🦸'},
  ],
};

const popups = [
  {icon:'💧',title:'HYDRATION BREAK',msg:'Take 2–3 big sips of water now. Staying hydrated keeps your power output high.',fact:'🔬 Science: 2% dehydration drops performance by up to 15%'},
  {icon:'🫁',title:'BREATHING RESET',msg:'Control your breathing: inhale slowly for 4 seconds, hold 1 second, exhale for 6 seconds.',fact:'⚡ Controlled breathing lowers heart rate faster between sets'},
  {icon:'🧠',title:'MENTAL FOCUS',msg:'Relax your shoulders. Unclench your jaw. Let tension leave your body before the next set.',fact:'💡 Mental relaxation between sets improves next-set performance by 8%'},
  {icon:'⚡',title:'NEXT SET: EXPLOSIVE',msg:'The next set focuses on explosive power. Visualize perfect form before you start.',fact:'🏆 Visualization activates the same motor neurons as physical practice'},
  {icon:'😮‍💨',title:'RECOVER & RESET',msg:'Take 90 seconds. Shake out your hands, roll your shoulders, and prepare your mindset.',fact:'🔬 90-second rest restores 85% of ATP energy stores for the next set'},
];

// ==================== STATE ====================
let userData = JSON.parse(localStorage.getItem('apexAthlete') || 'null');
let currentStep = 1;
let selectedOptions = {sport:null, level:null, goal:null, activity:null};
let sessionExercises = [];
let currentExIndex = 0;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let popupQueue = [...popups];
let popupTimeout = null;

// ==================== INIT ====================
function init(){
  renderDate();
  renderExercises('all');
  renderPlans();
  if(userData){
    updateDashboard();
    document.getElementById('nav-dashboard').style.display='inline';
  }
  // Pre-select sport if coming from home
  if(userData && userData.sport){
    // preselect in assessment
  }
}

function renderDate(){
  const el = document.getElementById('dash-date');
  if(el){
    el.textContent = new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  }
}

// ==================== NAVIGATION ====================
function showPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  window.scrollTo(0,0);
  if(page === 'session') initSession();
  if(page === 'dashboard') updateDashboard();
  if(page === 'plans') renderPlans();
}

function selectSport(sport){
  selectedOptions.sport = sport;
  showPage('assessment');
  // Pre-select in the options
  setTimeout(()=>{
    const opts = document.querySelectorAll('#sport-options .option-card');
    opts.forEach(o=>{
      const lbl = o.querySelector('.opt-label').textContent;
      if(lbl === sport) o.classList.add('selected');
      else o.classList.remove('selected');
    });
  },100);
}

function toggleMobileMenu(){
  const nl = document.querySelector('.nav-links');
  nl.style.display = nl.style.display === 'flex' ? 'none' : 'flex';
  nl.style.position = 'fixed';
  nl.style.top = '72px';
  nl.style.right = '0';
  nl.style.background = 'var(--bg2)';
  nl.style.padding = '24px';
  nl.style.flexDirection = 'column';
  nl.style.gap = '20px';
  nl.style.borderLeft = '1px solid var(--border)';
  nl.style.minHeight = '100vh';
  nl.style.zIndex = '899';
}

// ==================== ASSESSMENT ====================
function nextStep(to){
  // Validate current step
  if(to > currentStep){
    if(to === 2){
      const age = document.getElementById('inp-age').value;
      const gender = document.getElementById('inp-gender').value;
      const h = document.getElementById('inp-height').value;
      const w = document.getElementById('inp-weight').value;
      if(!age||!gender||!h||!w){alert('Please fill in all required fields.');return;}
    }
    if(to === 3 && (!selectedOptions.sport || !selectedOptions.level)){
      alert('Please select your sport and fitness level.');return;
    }
    if(to === 4 && (!selectedOptions.goal || !document.getElementById('inp-freq').value)){
      alert('Please select your goal and training frequency.');return;
    }
  }
  document.getElementById('step-'+currentStep).classList.remove('active');
  document.getElementById('ps-'+currentStep).classList.remove('active');
  document.getElementById('ps-'+currentStep).classList.add('done');
  currentStep = to;
  const stepEl = document.getElementById('step-'+currentStep);
  if(stepEl){ stepEl.classList.add('active'); }
  const psEl = document.getElementById('ps-'+currentStep);
  if(psEl){ psEl.classList.add('active'); }
}

function selectOption(el, group){
  document.querySelectorAll('#'+group+'-options .option-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  selectedOptions[group] = el.querySelector('.opt-label').textContent;
}

function submitAssessment(){
  const activity = selectedOptions.activity;
  if(!activity){alert('Please select your activity level.');return;}
  const age = parseInt(document.getElementById('inp-age').value);
  const height = parseFloat(document.getElementById('inp-height').value);
  const weight = parseFloat(document.getElementById('inp-weight').value);
  const bmi = weight / ((height/100) * (height/100));
  let bmiCat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  userData = {
    age, height, weight,
    gender: document.getElementById('inp-gender').value,
    sport: selectedOptions.sport || 'General Fitness',
    level: selectedOptions.level || 'Beginner',
    goal: selectedOptions.goal || 'General Fitness',
    freq: document.getElementById('inp-freq').value,
    activity, injury: document.getElementById('inp-injury').value,
    bmi: bmi.toFixed(1), bmiCat
  };
  localStorage.setItem('apexAthlete', JSON.stringify(userData));
  document.getElementById('nav-dashboard').style.display='inline';
  updateDashboard();
  showPage('dashboard');
}

// ==================== DASHBOARD ====================
function updateDashboard(){
  if(!userData) return;
  document.getElementById('dash-name').textContent = (userData.gender === 'Female' ? 'CHAMPION' : 'WARRIOR');
  document.getElementById('dash-sport-icon').textContent = sportEmojis[userData.sport] || '🏋️';
  document.getElementById('dash-sport-name').textContent = (userData.sport||'General').toUpperCase();
  document.getElementById('dash-level').textContent = (userData.level||'Beginner').toUpperCase() + ' ATHLETE';
  document.getElementById('dash-bmi').textContent = userData.bmi;
  const cat = userData.bmiCat;
  const catColors = {Underweight:'#3d8bff',Normal:'#00ff87',Overweight:'#ff9500',Obese:'#ff3d6b'};
  document.getElementById('dash-bmi-cat').textContent = cat;
  document.getElementById('dash-bmi-cat').style.color = catColors[cat] || 'var(--accent)';
  document.getElementById('dash-age-val').textContent = userData.age;
  document.getElementById('dash-goal-val').textContent = userData.goal;
  renderMainWorkout();
  renderDate();
}

function renderMainWorkout(){
  const activePlan = localStorage.getItem('apexCurrentPlan');
  let exs, sourceLabel;
  if(activePlan && planExercises[activePlan]){
    exs = planExercises[activePlan];
    sourceLabel = activePlan;
  } else {
    const goal = userData ? userData.goal : 'General Fitness';
    exs = workoutsByGoal[goal] || workoutsByGoal['General Fitness'];
    sourceLabel = null;
  }
  const planBadgeEl = document.getElementById('active-plan-badge');
  const clearBtnEl = document.getElementById('clear-plan-btn');
  if(planBadgeEl){
    planBadgeEl.style.display = sourceLabel ? 'inline-flex' : 'none';
    if(sourceLabel) planBadgeEl.textContent = '📋 ' + sourceLabel;
  }
  if(clearBtnEl){
    clearBtnEl.style.display = sourceLabel ? 'inline-block' : 'none';
  }
  const container = document.getElementById('main-exercises');
  container.innerHTML = exs.map(e=>`
    <div class="exercise-item" onclick="toggleExercise(this)">
      <div>
        <div class="ex-name">${e.emoji} ${e.name}</div>
        <div class="ex-detail">${e.detail}</div>
      </div>
      <div class="ex-check">✓</div>
    </div>
  `).join('');
}

function toggleExercise(el){
  el.classList.toggle('done');
}

// ==================== EXERCISE LIBRARY ====================
function renderExercises(filter){
  const grid = document.getElementById('exercises-grid');
  let list = filter === 'all' ? exercises :
    exercises.filter(e=>e.type===filter || e.level.toLowerCase()===filter);
  grid.innerHTML = list.map(e=>`
    <div class="ex-card" onclick="showExerciseDetail(${e.id})">
      <div class="ex-gif">${e.emoji}<div class="ex-gif-overlay"></div></div>
      <div class="ex-body">
        <div class="ex-tags">
          <span class="ex-tag tag-muscle">💪 ${e.muscle}</span>
          <span class="ex-tag tag-level">${e.level}</span>
        </div>
        <div class="ex-card-name">${e.name}</div>
        <div class="ex-card-desc">${e.desc}</div>
      </div>
      <div class="ex-card-footer">
        <div class="ex-timer-info">⏱ ${e.reps}</div>
        <div class="ex-timer-info" style="color:var(--accent)">▶ Start</div>
      </div>
    </div>
  `).join('');
}

function filterExercises(filter, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderExercises(filter);
}

function showExerciseDetail(id){
  showPage('session');
  const ex = exercises.find(e=>e.id===id);
  if(ex){
    sessionExercises = [ex];
    currentExIndex = 0;
    renderSessionExercise();
  }
}

// ==================== WORKOUT SESSION ====================
function initSession(){
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('play-btn').textContent = '▶';
  const activePlan = localStorage.getItem('apexCurrentPlan');
  let ws, label;
  if(activePlan && planExercises[activePlan]){
    ws = planExercises[activePlan];
    label = activePlan.toUpperCase();
  } else {
    const goal = userData ? userData.goal : 'General Fitness';
    ws = workoutsByGoal[goal] || workoutsByGoal['General Fitness'];
    label = (goal||'General Fitness').toUpperCase() + ' TRAINING';
  }
  sessionExercises = ws.map((w,i)=>({
    id:i+100, name:w.name.toUpperCase(), emoji:w.emoji,
    target: label,
    reps:w.detail, timer:30
  }));
  currentExIndex = 0;
  renderSessionExercise();
  renderSessionQueue();
  schedulePopup();
}

function renderSessionExercise(){
  const ex = sessionExercises[currentExIndex];
  if(!ex) return;
  document.getElementById('session-emoji').textContent = ex.emoji;
  document.getElementById('session-name').textContent = ex.name;
  document.getElementById('session-target').textContent = ex.target || 'ATHLETIC TRAINING';
  timerSeconds = ex.timer || 30;
  updateTimerDisplay();
  document.getElementById('session-ex-num').textContent = currentExIndex + 1;
  document.getElementById('session-ex-total').textContent = sessionExercises.length;
  const pct = ((currentExIndex) / sessionExercises.length * 100).toFixed(0);
  document.getElementById('session-progress').style.width = pct + '%';
  document.getElementById('timer-label').textContent = ex.timer ? 'SECONDS REMAINING' : 'REPS: ' + (ex.reps||'');
  renderSessionQueue();
}

function renderSessionQueue(){
  const queue = document.getElementById('session-queue');
  const slice = sessionExercises.slice(currentExIndex, currentExIndex + 3);
  queue.innerHTML = slice.map((e,i)=>`
    <div class="queue-item ${i===0?'active':''} ${i<0?'completed':''}">
      <span class="queue-emoji">${e.emoji}</span>
      <div>
        <div class="queue-name">${e.name}</div>
        <div class="queue-detail">${e.reps||e.timer+'s'}</div>
      </div>
    </div>
  `).join('');
}

function updateTimerDisplay(){
  const min = Math.floor(timerSeconds/60).toString().padStart(2,'0');
  const sec = (timerSeconds%60).toString().padStart(2,'0');
  document.getElementById('timer-display').textContent = `${min}:${sec}`;
}

function toggleTimer(){
  if(timerRunning){
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('play-btn').textContent = '▶';
  } else {
    timerRunning = true;
    document.getElementById('play-btn').textContent = '⏸';
    timerInterval = setInterval(()=>{
      if(timerSeconds > 0){
        timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('play-btn').textContent = '▶';
        // Show popup on completion
        showPopup();
        setTimeout(()=>nextExercise(), 400);
      }
    },1000);
  }
}

function nextExercise(){
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('play-btn').textContent = '▶';
  if(currentExIndex < sessionExercises.length - 1){
    currentExIndex++;
    renderSessionExercise();
  } else {
    // Done!
    showSessionComplete();
  }
}

function prevExercise(){
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('play-btn').textContent = '▶';
  if(currentExIndex > 0){
    currentExIndex--;
    renderSessionExercise();
  }
}

function showSessionComplete(){
  const popup = document.getElementById('popup');
  document.getElementById('popup-icon').textContent = '🏆';
  document.getElementById('popup-title').textContent = 'SESSION COMPLETE!';
  document.getElementById('popup-msg').textContent = "Incredible work today. Your consistency is building something extraordinary. Rest up and come back stronger.";
  document.getElementById('popup-fact').textContent = '⚡ Post-workout: Consume protein within 30 min for optimal recovery';
  popup.classList.add('show');
}

function schedulePopup(){
  clearTimeout(popupTimeout);
  // Show popup after 60 seconds of inactivity
  popupTimeout = setTimeout(()=>{
    if(document.getElementById('page-session').classList.contains('active')){
      showPopup();
    }
  }, 60000);
}

function showPopup(){
  const p = popupQueue[Math.floor(Math.random() * popupQueue.length)];
  document.getElementById('popup-icon').textContent = p.icon;
  document.getElementById('popup-title').textContent = p.title;
  document.getElementById('popup-msg').textContent = p.msg;
  document.getElementById('popup-fact').textContent = p.fact;
  document.getElementById('popup').classList.add('show');
}

function closePopup(){
  document.getElementById('popup').classList.remove('show');
  // Reset button to default
  const btn = document.getElementById('popup-close-btn');
  btn.textContent = 'CONTINUE TRAINING →';
  btn.onclick = closePopup;
  schedulePopup();
}

function clearActivePlan(){
  localStorage.removeItem('apexCurrentPlan');
  renderMainWorkout();
}


// ==================== PLANS ====================
function renderPlans(){
  const grid = document.getElementById('plans-grid');
  const activePlan = localStorage.getItem('apexCurrentPlan');
  grid.innerHTML = plans.map(p=>{
    const isActive = p.name === activePlan;
    return `
    <div class="plan-card" style="${isActive ? 'border-color:var(--accent);box-shadow:0 0 30px rgba(0,255,135,0.1);' : ''}">
      <div class="plan-header ${p.color}" style="${isActive ? 'position:relative' : ''}">
        ${isActive ? '<div style="position:absolute;top:16px;right:16px;background:var(--accent);color:#000;font-family:\'Barlow Condensed\',sans-serif;font-weight:700;font-size:11px;letter-spacing:2px;padding:4px 10px;border-radius:100px;text-transform:uppercase;">✓ ACTIVE</div>' : ''}
        <span class="plan-icon">${p.icon}</span>
        <div class="plan-name">${p.name}</div>
        <div class="plan-desc">${p.desc}</div>
      </div>
      <div class="plan-body">
        <div class="plan-stats">
          <div class="plan-stat"><div class="num">${p.days}</div><div class="lbl">Days</div></div>
          <div class="plan-stat"><div class="num">${p.total}</div><div class="lbl">Duration</div></div>
        </div>
        <div class="plan-days">
          ${p.schedule.map((d,i)=>`
            <div class="plan-day ${d.includes('Rest')?'rest':''}">
              <span class="day-name">Day ${i+1}</span>
              <span class="day-workout">${d}</span>
              <span class="day-time">${d.includes('Rest')?'—':'30–65 min'}</span>
            </div>
          `).join('')}
        </div>
        <button class="btn-plan" onclick="startPlan('${p.name}')" style="${isActive ? 'background:var(--bg3);color:var(--text2);cursor:default;' : ''}">
          ${isActive ? '✓ Currently Active' : 'Start This Plan →'}
        </button>
      </div>
    </div>
  `}).join('');
}

function startPlan(name){
  if(!userData){showPage('assessment');return;}
  localStorage.setItem('apexCurrentPlan', name);
  // Show confirmation then go to dashboard
  showPlanConfirmation(name);
}

function showPlanConfirmation(name){
  const plan = plans.find(p=>p.name===name);
  const popup = document.getElementById('popup');
  document.getElementById('popup-icon').textContent = plan ? plan.icon : '📋';
  document.getElementById('popup-title').textContent = 'PLAN ACTIVATED!';
  document.getElementById('popup-msg').textContent = '"' + name + '" is now your active training program. Your dashboard and workout sessions have been updated to match this plan.';
  document.getElementById('popup-fact').textContent = '💡 Your Today\'s Training and Session exercises now follow this plan';
  // Override close to go to dashboard
  const closeBtn = document.getElementById('popup-close-btn');
  if(closeBtn){
    closeBtn.onclick = ()=>{ closePopup(); showPage('dashboard'); };
    closeBtn.textContent = 'GO TO DASHBOARD →';
  }
  popup.classList.add('show');
}

// INIT
init();
