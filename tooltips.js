  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-box";
  document.body.appendChild(tooltip);

  const OFFSET_X = 12;
  const OFFSET_Y = 12;

  const showTooltip = (event) => {
    const el = event.currentTarget;
    const text = el.getAttribute("data-tooltip");
    if (!text) return;

    tooltip.textContent = text;
    tooltip.style.left = event.pageX + OFFSET_X + "px";
    tooltip.style.top = event.pageY + OFFSET_Y + "px";
    tooltip.classList.add("visible");
  };

  const moveTooltip = (event) => {
    if (!tooltip.classList.contains("visible")) return;
    tooltip.style.left = event.pageX + OFFSET_X + "px";
    tooltip.style.top = event.pageY + OFFSET_Y + "px";
  };

  const hideTooltip = () => {
    tooltip.classList.remove("visible");
  };

  document.querySelectorAll("[data-tooltip]").forEach((el) => {
    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mousemove", moveTooltip);
    el.addEventListener("mouseleave", hideTooltip);
  });

