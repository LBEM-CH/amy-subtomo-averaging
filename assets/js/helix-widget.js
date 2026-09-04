document.addEventListener('DOMContentLoaded', function () {
  // Store the original command text as a substitution template for both widget types
  document.querySelectorAll('.helix-cmd, .helix-search-cmd').forEach(function (el) {
    el.dataset.template = el.textContent;
  });
});

function updateHelixCmd(btn) {
  var widget = btn.closest('.helix-widget');
  var twist = widget.querySelector('.helix-twist').value;
  var rise = widget.querySelector('.helix-rise').value;
  var zpct = widget.querySelector('.helix-zpct').value;
  var diam = widget.querySelector('.helix-diam').value;
  var cmdEl = widget.querySelector('.helix-cmd');
  cmdEl.textContent = cmdEl.dataset.template
    .replace(/--twist [\d.]+/, '--twist ' + twist)
    .replace(/--rise [\d.]+/, '--rise ' + rise)
    .replace(/--z_percentage [\d.]+/, '--z_percentage ' + zpct)
    .replace(/--cyl_outer_diameter \d+/, '--cyl_outer_diameter ' + diam);
}

function updateHelixSearchCmd(btn) {
  var widget = btn.closest('.helix-widget');
  var twistMin = widget.querySelector('.helix-twist-min').value;
  var twistMax = widget.querySelector('.helix-twist-max').value;
  var riseMin  = widget.querySelector('.helix-rise-min').value;
  var riseMax  = widget.querySelector('.helix-rise-max').value;
  var zpct     = widget.querySelector('.helix-zpct').value;
  var diam     = widget.querySelector('.helix-diam').value;
  var cmdEl    = widget.querySelector('.helix-search-cmd');
  cmdEl.textContent = cmdEl.dataset.template
    .replace(/--twist_min [\d.]+/, '--twist_min ' + twistMin)
    .replace(/--twist_max [\d.]+/, '--twist_max ' + twistMax)
    .replace(/--rise_min [\d.]+/,  '--rise_min '  + riseMin)
    .replace(/--rise_max [\d.]+/,  '--rise_max '  + riseMax)
    .replace(/--z_percentage [\d.]+/, '--z_percentage ' + zpct)
    .replace(/--cyl_outer_diameter \d+/, '--cyl_outer_diameter ' + diam);
}
