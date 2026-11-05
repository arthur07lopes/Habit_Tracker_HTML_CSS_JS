"use strict";

const STORAGE_KEY = "ritmo-habit-tracker-v1";
const THEME_STORAGE_KEY = "ritmo-habit-tracker-theme";

const habitForm = document.querySelector("#habit-form");
const habitInput = document.querySelector("#habit-name");
const habitList = document.querySelector("#habit-list");
const habitCount = document.querySelector("#habit-count");
const progressBar = document.querySelector("#daily-progress");
const progressNumber = document.querySelector("#progress-number");
const progressText = document.querySelector("#progress-text");
const statusMessage = document.querySelector("#status-message");
const themeToggleButton = document.querySelector("#theme-toggle");

let habits = loadHabits();

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `habit-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isValidHabit(value) {
  return Boolean(
    value &&
    typeof value.id === "string" && value.id.trim() &&
    typeof value.name === "string" && value.name.trim() &&
    typeof value.completedDate === "string"
  );
}

function loadHabits() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isValidHabit).map((habit) => ({
      id: habit.id,
      name: habit.name.trim(),
      createdAt: typeof habit.createdAt === "string" ? habit.createdAt : "",
      completedDate: /^\d{4}-\d{2}-\d{2}$/.test(habit.completedDate)
        ? habit.completedDate
        : ""
    }));
  } catch (error) {
    console.error("Não foi possível carregar os hábitos:", error);
    return [];
  }
}

function saveHabits() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    return true;
  } catch (error) {
    console.error("Não foi possível salvar os hábitos:", error);
    showMessage("Não foi possível salvar os dados neste navegador.");
    return false;
  }
}

function showMessage(message) {
  statusMessage.textContent = "";
  window.setTimeout(() => {
    statusMessage.textContent = message;
  }, 30);
}

function applyTheme(isDark) {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  if (themeToggleButton) {
    themeToggleButton.setAttribute("aria-pressed", String(isDark));
    themeToggleButton.textContent = isDark
      ? "Ativar tema claro"
      : "Ativar tema escuro";
  }
}

function initializeTheme() {
  let isDark = false;

  try {
    isDark = localStorage.getItem(THEME_STORAGE_KEY) === "dark";
  } catch (error) {
    console.error("Não foi possível carregar a preferência de tema:", error);
  }

  applyTheme(isDark);

  if (!themeToggleButton) {
    console.error("O controle de tema não foi encontrado no HTML.");
    return;
  }

  themeToggleButton.addEventListener("click", () => {
    const useDarkTheme = document.documentElement.dataset.theme !== "dark";
    applyTheme(useDarkTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, useDarkTheme ? "dark" : "light");
    } catch (error) {
      console.error("Não foi possível salvar a preferência de tema:", error);
      if (statusMessage) {
        showMessage("O tema foi alterado, mas a preferência não pôde ser salva neste navegador.");
      }
    }
  });
}

function isCompletedToday(habit) {
  return habit.completedDate === getTodayKey();
}

function updateProgress() {
  const total = habits.length;
  const completed = habits.filter(isCompletedToday).length;
  const percentage = total === 0
    ? 0
    : Math.round((completed / total) * 100);

  progressBar.max = total > 0 ? total : 1;
  progressBar.value = completed;
  progressBar.textContent = `${percentage}%`;
  progressNumber.textContent = `${percentage}%`;
  progressText.textContent =
    `${completed} de ${total} hábitos concluídos hoje (${percentage}%).`;
  habitCount.textContent = total === 1 ? "1 hábito" : `${total} hábitos`;
}

function createHabitCard(habit) {
  const item = document.createElement("li");
  item.className = "habit-item";

  const checkbox = document.createElement("input");
  checkbox.className = "habit-checkbox";
  checkbox.type = "checkbox";
  checkbox.id = `habit-${habit.id}`;
  checkbox.checked = isCompletedToday(habit);
  checkbox.dataset.habitId = habit.id;

  const textBox = document.createElement("div");
  const label = document.createElement("label");
  label.className = "habit-name";
  label.htmlFor = checkbox.id;
  label.textContent = habit.name;

  const state = document.createElement("span");
  state.className = "habit-state";
  state.textContent = isCompletedToday(habit) ? "Concluído hoje" : "Pendente";
  textBox.append(label, state);

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.type = "button";
  removeButton.dataset.removeId = habit.id;
  removeButton.textContent = "Excluir";
  removeButton.setAttribute("aria-label", `Excluir hábito ${habit.name}`);

  if (checkbox.checked) item.classList.add("is-complete");
  item.append(checkbox, textBox, removeButton);
  return item;
}

function renderHabits() {
  habitList.replaceChildren();

  if (habits.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "Você ainda não cadastrou hábitos.";
    habitList.append(emptyItem);
    updateProgress();
    return;
  }

  const fragment = document.createDocumentFragment();
  habits.forEach((habit) => {
    fragment.append(createHabitCard(habit));
  });
  habitList.append(fragment);
  updateProgress();
}

function handleAddHabit(event) {
  event.preventDefault();
  const name = habitInput.value.trim();

  if (!name) {
    showMessage("Digite o nome de um hábito antes de adicionar.");
    habitInput.focus();
    return;
  }

  const normalizedName = name.normalize("NFKC").toLocaleLowerCase("pt-BR");
  const duplicated = habits.some((habit) =>
    habit.name.normalize("NFKC").toLocaleLowerCase("pt-BR") === normalizedName
  );

  if (duplicated) {
    showMessage("Esse hábito já está na sua lista.");
    habitInput.focus();
    return;
  }

  habits.push({
    id: createId(),
    name,
    createdAt: new Date().toISOString(),
    completedDate: ""
  });

  const saved = saveHabits();
  renderHabits();
  habitForm.reset();
  habitInput.focus();
  showMessage(saved ? `Hábito ${name} adicionado.` : `Hábito ${name} adicionado nesta sessão, mas não foi salvo.`);
}

function toggleHabit(id) {
  const habit = habits.find((item) => item.id === id);
  if (!habit) return;

  const wasCompleted = isCompletedToday(habit);
  habit.completedDate = wasCompleted ? "" : getTodayKey();
  saveHabits();
  renderHabits();

  const restoredCheckbox = Array.from(
    habitList.querySelectorAll("input[data-habit-id]")
  ).find((checkbox) => checkbox.dataset.habitId === id);
  if (restoredCheckbox) restoredCheckbox.focus();

  showMessage(wasCompleted
    ? `Hábito ${habit.name} voltou para pendente.`
    : `Hábito ${habit.name} concluído.`);
}

function removeHabit(id) {
  const habit = habits.find((item) => item.id === id);
  if (!habit) return;

  const confirmed = window.confirm(`Deseja excluir o hábito ${habit.name}?`);
  if (!confirmed) return;

  habits = habits.filter((item) => item.id !== id);
  saveHabits();
  renderHabits();
  habitInput.focus();
  showMessage(`Hábito ${habit.name} excluído.`);
}

function init() {
  if (!habitForm || !habitInput || !habitList || !habitCount ||
      !progressBar || !progressNumber || !progressText || !statusMessage) {
    console.error("Um ou mais elementos necessários não foram encontrados no HTML.");
    return;
  }

  habitForm.addEventListener("submit", handleAddHabit);

  habitList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-habit-id]");
    if (checkbox) toggleHabit(checkbox.dataset.habitId);
  });

  habitList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-remove-id]");
    if (button) removeHabit(button.dataset.removeId);
  });

  renderHabits();
}

initializeTheme();
init();