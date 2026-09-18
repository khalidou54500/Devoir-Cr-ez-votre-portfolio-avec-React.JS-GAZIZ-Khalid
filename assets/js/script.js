// Sélection des éléments du formulaire
const form = document.querySelector("#comment-form");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const errorMessage = document.querySelector("#error-message");
const commentList = document.querySelector("#comment-list");

// Gestion de la soumission du formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const commentText = commentInput.value;

    // Validation des champs
    if (name.length < 2) {
        errorMessage.textContent = "Le nom doit contenir au moins 2 caractères.";
        errorMessage.classList.add("visible");
        return;
    }

    if (commentText.length < 10) {
        errorMessage.textContent = "Le commentaire doit contenir au moins 10 caractères.";
        errorMessage.classList.add("visible");
        return;
    }

    // Création de la carte du commentaire
    const commentCard = document.createElement("article");
    commentCard.classList.add("comment");

    const author = document.createElement("h3");
    author.textContent = name;

    const text = document.createElement("p");
    text.textContent = commentText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "🗑️ Supprimer";

    // Suppression du commentaire
    deleteButton.addEventListener("click", function () {
        commentCard.remove();
    });

    // Ajout des éléments dans la carte
    commentCard.appendChild(author);
    commentCard.appendChild(text);
    commentCard.appendChild(deleteButton);

    // Ajout du nouveau commentaire à la liste
    commentList.appendChild(commentCard);

    // Réinitialisation du formulaire
    form.reset();

    // Suppression du message d'erreur
    errorMessage.textContent = "";
    errorMessage.classList.remove("visible");
});

// Gestion des boutons Supprimer déjà présents dans la maquette
const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const comment = button.parentElement;
        comment.remove();
    });
});
