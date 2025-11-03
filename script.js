:root{
  --bg: #fff;
  --card: #ffffff;
  --text: #1f2937;
  --muted:#6b7280;
  --accent: #d97706; /* couleur frites/orange */
  --accent-dark: #b45309;
  --radius: 10px;
  --container: 1100px;
  --shadow: 0 6px 20px rgba(15,23,42,0.08);
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  background:linear-gradient(180deg,#fff 0%, #fffaf0 100%);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.45;
  font-size:16px;
}

/* container */
.container{
  max-width:var(--container);
  margin:0 auto;
  padding:1rem;
}

/* Header */
.site-header{
  background:rgba(255,255,255,0.9);
  position:sticky;
  top:0;
  z-index:60;
  box-shadow: 0 1px 0 rgba(0,0,0,0.04);
}
.header-row{
  display:flex;
  gap:1rem;
  align-items:center;
  justify-content:space-between;
  padding:0.75rem 0;
}
.brand a{ text-decoration:none; color:var(--text)}
.brand small{ display:block; color:var(--muted); font-size:0.85rem}

/* nav */
.nav-list{
  display:flex;
  gap:1rem;
  list-style:none;
  margin:0;
  padding:0;
  align-items:center;
}
.nav-list a{ text-decoration:none; color:var(--text); padding:0.4rem 0.6rem; border-radius:6px;}
.nav-list a:hover{ background:rgba(0,0,0,0.03)}
.nav-toggle{ display:none; background:none; border:0; font-size:1.25rem}

/* Hero */
.hero{
  padding:2.5rem 0;
}
.hero-inner{
  display:grid;
  grid-template-columns:1fr 420px;
  gap:2rem;
  align-items:center;
}
.hero-text h1{ font-size:2rem; margin:0 0 .5rem;}
.lead{ color:var(--muted); margin-top:0.25rem;}
.hero-image img{ width:100%; border-radius:14px; box-shadow:var(--shadow)}

/* Buttons */
.btn-primary{
  display:inline-block;
  background:var(--accent);
  color:#fff;
  text-decoration:none;
  padding:0.6rem 1rem;
  border-radius:8px;
  border:0;
  cursor:pointer;
  font-weight:600;
}
.btn-primary:hover{ background:var(--accent-dark)}
.btn-ghost{
  display:inline-block;
  background:transparent;
  color:var(--text);
  border:1px solid rgba(0,0,0,0.06);
  padding:0.5rem 0.9rem;
  border-radius:8px;
  text-decoration:none;
  margin-left:0.5rem;
}
.btn-outline{
  background:transparent;
  border:1px solid rgba(0,0,0,0.08);
  padding:0.45rem 0.75rem;
  border-radius:8px;
  cursor:pointer;
}

/* sections */
.section{ padding:2rem 0; }
.menu-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:1rem;
}
.menu-item{
  background:var(--card);
  padding:1rem;
  border-radius:12px;
  box-shadow:var(--shadow);
}
.menu-item h3{ margin:0 0.25rem 0.35rem 0;}
.menu-item .desc{ color:var(--muted); font-size:0.95rem; margin-bottom:0.6rem;}
.price{ font-weight:700; margin-bottom:0.6rem; color:var(--accent)}

/* gallery */
.gallery-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:0.6rem;
}
.gallery-grid img{ width:100%; border-radius:8px; object-fit:cover}

/* info */
.info-grid{ display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; }
.info-grid h3{ margin-top:0}

/* contact form */
.contact-form{ max-width:720px; background:var(--card); padding:1rem; border-radius:12px; box-shadow:var(--shadow)}
.form-row{ margin-bottom:0.8rem; display:flex; flex-direction:column;}
.form-row label{ font-size:0.9rem; margin-bottom:0.3rem;}
.form-row input, .form-row textarea{
  padding:0.6rem; border-radius:8px; border:1px solid #e6e6e6; font-size:1rem;
}
.form-actions{ display:flex; gap:0.6rem; margin-top:0.6rem; align-items:center}

/* footer */
.site-footer{ padding:1.2rem 0; background:transparent; color:var(--muted)}
.footer-grid{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; align-items:center}
.social{ list-style:none; padding:0; margin:0; display:flex; gap:0.6rem}

/* modal */
.modal{
  position:fixed; inset:0; display:flex; justify-content:center; align-items:center;
  background:rgba(11,14,18,0.35); opacity:0; pointer-events:none; transition:opacity .18s;
}
.modal[aria-hidden="false"]{ opacity:1; pointer-events:auto;}
.modal-content{
  background:var(--card);
  border-radius:12px;
  padding:1.2rem;
  width:min(480px,94%);
  box-shadow:var(--shadow);
}
.modal-close{ float:right; border:0; background:none; font-size:1rem; cursor:pointer}

/* small screens */
@media (max-width:900px){
  .hero-inner{ grid-template-columns:1fr; }
  .gallery-grid{ grid-template-columns:repeat(2,1fr) }
  .footer-grid{ grid-template-columns:1fr }
  .nav-list{ display:none; position:absolute; right:1rem; top:64px; background:var(--card); padding:0.75rem; border-radius:8px; box-shadow:var(--shadow)}
  .nav-list.show{ display:flex; flex-direction:column; gap:0.5rem;}
  .nav-toggle{ display:inline-block }
}
