# 🛳️ Titanic - Machine Learning from Disaster

## 📌 Description
Ce projet est ma participation à la compétition **[Titanic: Machine Learning from Disaster](https://www.kaggle.com/c/titanic)** sur Kaggle.  
L’objectif est de prédire la survie des passagers du Titanic en fonction de leurs caractéristiques (âge, sexe, classe, etc.).

---

## ⚙️ Pipeline du projet
1. **Prétraitement des données**
   - Suppression des colonnes inutiles (`Name`, `Ticket`, `Cabin`, `PassengerId`)
   - Encodage des variables catégorielles (`Sex`, `Embarked`, `Pclass`)
   - Imputation des valeurs manquantes (médiane pour `Age` et `Fare`)

2. **Modélisation**
   - Modèle principal : **RandomForestClassifier**
   - Entraînement sur `train.csv`
   - Validation interne avec `train_test_split`

3. **Prédictions**
   - Génération du fichier `submission.csv`
   - Format : `PassengerId, Survived`

---

## 📊 Résultats
- **Score Kaggle : 0.77272**  
Ce score correspond à environ **77 % de prédictions correctes** sur le dataset de test officiel.

---

## 🚀 Améliorations possibles
- Feature engineering avancé (extraction des titres, taille des familles, regroupement des âges)
- Hyperparameter tuning (GridSearchCV, RandomizedSearchCV)
- Essais avec des modèles plus puissants (XGBoost, LightGBM)
- Combinaison de plusieurs modèles (stacking/blending)

---

## 📂 Structure du projet
