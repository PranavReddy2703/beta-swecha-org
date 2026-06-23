import { registerSW } from "virtual:pwa-register";

// Create the update popup UI dynamically
function createUpdatePopup(updateSW: (reloadPage?: boolean) => Promise<void>) {
  const popup = document.createElement("div");
  popup.className =
    "fixed top-0 inset-x-0 md:top-6 md:right-6 md:left-auto md:w-96 z-50 bg-card-bg/95 backdrop-blur-xl border-b md:border border-structural-borders/50 p-4 md:rounded-xl shadow-2xl flex flex-col gap-3 -translate-y-24 opacity-0 transition-all duration-500";
  popup.id = "pwa-update-popup";

  const text = document.createElement("p");
  text.className = "text-text-main font-medium text-sm";
  text.textContent = "A new update is available!";

  const btnGroup = document.createElement("div");
  btnGroup.className = "flex gap-2 justify-end";

  const reloadBtn = document.createElement("button");
  reloadBtn.className =
    "bg-primary-brand text-black px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary-brand/80 transition-colors";
  reloadBtn.textContent = "Reload";
  reloadBtn.onclick = () => {
    updateSW(true);
  };

  const dismissBtn = document.createElement("button");
  dismissBtn.className =
    "bg-transparent border border-structural-borders/50 text-text-muted px-4 py-1.5 rounded-lg text-sm font-medium hover:text-text-main transition-colors";
  dismissBtn.textContent = "Dismiss";
  dismissBtn.onclick = () => {
    // Save preference to not bother for a while
    sessionStorage.setItem("pwa-update-dismissed", "true");
    popup.classList.remove("translate-y-0", "opacity-100");
    popup.classList.add("-translate-y-24", "opacity-0");
    setTimeout(() => popup.remove(), 500);
  };

  btnGroup.appendChild(dismissBtn);
  btnGroup.appendChild(reloadBtn);
  popup.appendChild(text);
  popup.appendChild(btnGroup);

  document.body.appendChild(popup);

  // Animate in
  requestAnimationFrame(() => {
    popup.classList.remove("-translate-y-24", "opacity-0");
    popup.classList.add("translate-y-0", "opacity-100");
  });

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      popup.classList.remove("translate-y-0", "opacity-100");
      popup.classList.add("-translate-y-24", "opacity-0");
      setTimeout(() => popup.remove(), 500);
    }
  }, 5000);
}

if (typeof window !== "undefined") {
  const updateSW = registerSW({
    onNeedRefresh() {
      // Don't show if user dismissed it this session
      if (!sessionStorage.getItem("pwa-update-dismissed")) {
        createUpdatePopup(updateSW);
      }
    },
    onOfflineReady() {
      console.log("App is ready to work offline.");
    },
  });

  // For demonstration/testing
  (window as any).triggerUpdatePopup = () => {
    createUpdatePopup(async () => window.location.reload());
  };
}

// --- PWA Installation Prompt Logic ---
let deferredPrompt: any;

function createInstallPopup() {
  // Don't show if already showing or if dismissed previously
  if (document.getElementById("pwa-install-popup")) return;
  const dismissedAt = localStorage.getItem("pwa-install-dismissed");
  if (dismissedAt) {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    if (Date.now() - parseInt(dismissedAt, 10) < oneDayInMs) {
      return;
    }
  }

  const popup = document.createElement("div");
  popup.className =
    "fixed top-0 inset-x-0 md:top-6 md:right-6 md:left-auto md:w-96 z-50 bg-card-bg/95 backdrop-blur-xl border-b md:border border-primary-brand/50 p-4 md:rounded-xl shadow-2xl flex flex-col gap-3 -translate-y-24 opacity-0 transition-all duration-500";
  popup.id = "pwa-install-popup";

  const text = document.createElement("p");
  text.className = "text-text-main font-medium text-sm";
  text.textContent = "Install Swecha App for offline access!";

  const btnGroup = document.createElement("div");
  btnGroup.className = "flex gap-2 justify-end";

  const installBtn = document.createElement("button");
  installBtn.className =
    "bg-primary-brand text-black px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary-brand/80 transition-colors";
  installBtn.textContent = "Install";
  installBtn.onclick = async () => {
    popup.classList.remove("translate-y-0", "opacity-100");
    popup.classList.add("-translate-y-24", "opacity-0");
    setTimeout(() => popup.remove(), 500);

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
    }
  };

  const dismissBtn = document.createElement("button");
  dismissBtn.className =
    "bg-transparent border border-structural-borders/50 text-text-muted px-4 py-1.5 rounded-lg text-sm font-medium hover:text-text-main transition-colors";
  dismissBtn.textContent = "Later";
  dismissBtn.onclick = () => {
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
    popup.classList.remove("translate-y-0", "opacity-100");
    popup.classList.add("-translate-y-24", "opacity-0");
    setTimeout(() => popup.remove(), 500);
  };

  btnGroup.appendChild(dismissBtn);
  btnGroup.appendChild(installBtn);
  popup.appendChild(text);
  popup.appendChild(btnGroup);

  document.body.appendChild(popup);

  // Animate in
  requestAnimationFrame(() => {
    popup.classList.remove("-translate-y-24", "opacity-0");
    popup.classList.add("translate-y-0", "opacity-100");
  });

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      popup.classList.remove("translate-y-0", "opacity-100");
      popup.classList.add("-translate-y-24", "opacity-0");
      setTimeout(() => popup.remove(), 500);
    }
  }, 5000);
}

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  createInstallPopup();
});

// For testing install popup manually
(window as any).triggerInstallPopup = () => {
  createInstallPopup();
};
