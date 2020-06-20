const LanguageBar = () => {
  return (
    <div className="language-bar">
      <div className="languages">
        <span className="lang active">English</span>
        <span className="lang">中文 (Chinese)</span>
        <span className="lang">Français (French)</span>
        <span className="lang">日本語 (Japanese)</span>
        <span className="lang">한국어 (Korean)</span>
        <span className="lang">Español (Spanish)</span>
      </div>
      <div className="copyright">
        <span className="copy">&copy; 2020 Solace</span>
        <span className="divider"></span>
        <span className="link">Legal</span>
        <span className="divider"></span>
        <span className="link">Sitemap</span>
      </div>
    </div>
  );
};

export default LanguageBar;
