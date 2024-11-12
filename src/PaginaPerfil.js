import React from "react";
import "./PaginaPerfil.css";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <aside className="sidebar">
        <img src="menu.png" alt="Logo" className="logo" />
      </aside>
      <main className="profile-content">
        <div className="avatar-section">
          <div className="avatars">
            <img src="avatar1.png" alt="Avatar 1" className="avatar" />
            <img src="avatar2.png" alt="Avatar 2" className="avatar" />
            <img src="icon3.png" alt="Avatar 3" className="avatar" />
            <div className="avatar add-avatar">+</div>
          </div>
        </div>
        <form className="profile-form">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Nome" />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label>Nascimento</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input type="password" placeholder="Senha" />
          </div>
          <button type="button" className="btn ver-historico">
            Ver histórico de notas
          </button>
          <button type="button" className="btn logout">Sair da conta</button>
          <button type="button" className="btn delete">Excluir conta</button>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
