## Non publié

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction de l'utilisation du composant `ErrorPage` ([#839](https://github.com/assurance-maladie-digital/design-system/pull/839)) ([62d9c32](https://github.com/assurance-maladie-digital/design-system/commit/62d9c3209e85896ce0d0548b3158fc59321cd00a))
  - **template:** Correction de l'export du service `formatDate` ([#840](https://github.com/assurance-maladie-digital/design-system/pull/840)) ([a076f3a](https://github.com/assurance-maladie-digital/design-system/commit/a076f3a7965f930bc257242b6eda032975f81017))
  - **DatePicker:** Correction des slots conditionnels qui cassent la directive `vue-input-facade` ([#828](https://github.com/assurance-maladie-digital/design-system/pull/828)) ([62ebec0](https://github.com/assurance-maladie-digital/design-system/commit/62ebec0c3fb768dda42b63070189ef68e7d2cd1b))

- ♻️ **Refactoring**
  - **template:** Réécriture du commentaire du service API exemple `folders` ([#841](https://github.com/assurance-maladie-digital/design-system/pull/841)) ([d3b9ea3](https://github.com/assurance-maladie-digital/design-system/commit/d3b9ea304baa84b76dc5d23f5ac7b33d7d0c2e17))

- 🔥 **Suppressions**
  - **template:** Suppression de la classe `main-ctn` non utilisée dans le composant `App` ([#842](https://github.com/assurance-maladie-digital/design-system/pull/842)) ([9100b7a](https://github.com/assurance-maladie-digital/design-system/commit/9100b7a49024e9a50504b1987560b04dfc49dcbf))

### Interne

- ⬆️ **Dépendances**
  - **core-js:** Mise à jour vers la `v3.8.3` ([#832](https://github.com/assurance-maladie-digital/design-system/pull/832)) ([e32c91c](https://github.com/assurance-maladie-digital/design-system/commit/e32c91c5b3418581e502c82ce97ef0fd16f92b17))
  - **fs-extra:** Mise à jour vers la `v9.1.0` ([#834](https://github.com/assurance-maladie-digital/design-system/pull/834)) ([f6079fb](https://github.com/assurance-maladie-digital/design-system/commit/f6079fbfb6c1e24a366127942919b174c94589b4))
  - **sass:** Mise à jour vers la `v1.32.5` ([#835](https://github.com/assurance-maladie-digital/design-system/pull/835)) ([49e405e](https://github.com/assurance-maladie-digital/design-system/commit/49e405e9cb4609d2c600f273141663815b06a5f3))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v31.0.8` ([#836](https://github.com/assurance-maladie-digital/design-system/pull/836)) ([b03b796](https://github.com/assurance-maladie-digital/design-system/commit/b03b79669d0c356a63892b55c32438632a762003))
  - **@types/node:** Mise à jour vers la `v12.19.15` ([#837](https://github.com/assurance-maladie-digital/design-system/pull/837)) ([f833b0f](https://github.com/assurance-maladie-digital/design-system/commit/f833b0fc040da2f6e9b393a17217ead53f5fa2b9))
  - **vuetify:** Mise à jour vers la `v2.4.3` ([#838](https://github.com/assurance-maladie-digital/design-system/pull/838)) ([0f2b152](https://github.com/assurance-maladie-digital/design-system/commit/0f2b152b6206bc64cf736bb31908d2e53effb494))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.5.0` ([#843](https://github.com/assurance-maladie-digital/design-system/pull/843) ([ef1b1b1](https://github.com/assurance-maladie-digital/design-system/commit/ef1b1b1226d8cf228f5f829b4c5b768aa98f8353))
  - **dayjs:** Mise à jour vers la `v1.10.4` ([#844](https://github.com/assurance-maladie-digital/design-system/pull/844)) ([b443a69](https://github.com/assurance-maladie-digital/design-system/commit/b443a69fa09a92f62a764cf240311317b7c3e160))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.11` ([#845](https://github.com/assurance-maladie-digital/design-system/pull/845))

## v2.0.0-beta.5

**Version publiée le 18/01/2021.**

Cette version comporte l'ajout du composant `TableToolbar` ainsi que l'ajout des styles communs dans Vue Dot et plusieurs correctifs sur le FormBuilder.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **styles:** Ajout des styles communs `vuetify.scss` et `utilities.scss` ([#625](https://github.com/assurance-maladie-digital/design-system/pull/625)) ([689279d](https://github.com/assurance-maladie-digital/design-system/commit/689279d1eed92256fffb346a041e4a04b764f150))
  - **TableToolbar:** Ajout d'un nouveau composant ([#735](https://github.com/assurance-maladie-digital/design-system/pull/375)) ([4b88587](https://github.com/assurance-maladie-digital/design-system/commit/4b88587d39b8807957832e20702a0d1dd3b29fab))

- 🐛 **Corrections de bugs**
  - **styles:** Correction du style des onglets ([#766](https://github.com/assurance-maladie-digital/design-system/pull/766)) ([ceb0534](https://github.com/assurance-maladie-digital/design-system/commit/ceb0534884e37f89df13ddde14f7551659863441))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#813](https://github.com/assurance-maladie-digital/design-system/pull/813)) ([ecdcae0](https://github.com/assurance-maladie-digital/design-system/commit/ecdcae00c497ef96d2022a865be82e1b89a322b8))

### Vue Dash

- ♻️ **Refactoring**
  - **template:** Utilisation des styles communs de Vue Dot ([#624](https://github.com/assurance-maladie-digital/design-system/pull/624)) ([31c3376](https://github.com/assurance-maladie-digital/design-system/commit/31c3376d6fcda97447c40aeb6e72bd61862b9f69))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#830](https://github.com/assurance-maladie-digital/design-system/pull/830)) ([3fb4dba](https://github.com/assurance-maladie-digital/design-system/commit/3fb4dba025ad7d6a9e4411b0b10f99ff542201d2))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#827](https://github.com/assurance-maladie-digital/design-system/pull/827)) ([c48c6eb](https://github.com/assurance-maladie-digital/design-system/commit/c48c6ebd58cf6c0067af99fc6f73c4245d3634e3))

### FormBuilder

- 🐛 **Corrections de bugs**
  - **fields:** Suppression des types non standards sur les champs de sélection ([#814](https://github.com/assurance-maladie-digital/design-system/pull/814)) ([1936781](https://github.com/assurance-maladie-digital/design-system/commit/1936781d942a1df3b76923df6175a32290d3b9f7))

- ♻️ **Refactoring**
  - **template:** Utilisation des styles communs de Vue Dot ([#767](https://github.com/assurance-maladie-digital/design-system/pull/767)) ([a076f3a](https://github.com/assurance-maladie-digital/design-system/commit/a076f3a7965f930bc257242b6eda032975f81017))

- 🔥 **Suppressions**
  - **fields:** Suppression du composant `SelectField` non utilisé ([#815](https://github.com/assurance-maladie-digital/design-system/pull/815)) ([09a3ba4](https://github.com/assurance-maladie-digital/design-system/commit/09a3ba44f1eb11ebe168d75cfb92c20ba27a1e71))

### Interne

- 🔒 **Sécurité**
  - **ini:** Mise à jour vers de la `v1.3.5` vers la `v1.3.8` ([#793](https://github.com/assurance-maladie-digital/design-system/pull/793)) ([ea0eba1](https://github.com/assurance-maladie-digital/design-system/commit/ea0eba186924b960474630154610aa9d301fdfe6))

- 📝 **Documentation**
  - **issues:** Correction du template pour les demandes de nouvelles fonctionnalités ([#765](https://github.com/assurance-maladie-digital/design-system/pull/765)) ([e056de9](https://github.com/assurance-maladie-digital/design-system/commit/e056de9c9fb679677ca77ae47ad44b28c831639f))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#829](https://github.com/assurance-maladie-digital/design-system/pull/829)) ([7034077](https://github.com/assurance-maladie-digital/design-system/commit/703407742fbb118593947a4bc44627393ecee814))

- ⬆️ **Dépendances**
  - **lint-staged:** Mise à jour vers la `v10.5.3` ([#772](https://github.com/assurance-maladie-digital/design-system/pull/772)) ([aee38de](https://github.com/assurance-maladie-digital/design-system/commit/aee38de5f56c96ec827c9b960396ddb53b392e80))
  - **ts-node:** Mise à jour vers la `v9.1.1` ([#777](https://github.com/assurance-maladie-digital/design-system/pull/777)) ([0bb5cca](https://github.com/assurance-maladie-digital/design-system/commit/0bb5cca27e451f7e69c408406b589374fa8a852e))
  - **babel:** Mise à jour du monorepo vers la `v7.12.10` ([#785](https://github.com/assurance-maladie-digital/design-system/pull/785)) ([1a7fa22](https://github.com/assurance-maladie-digital/design-system/commit/1a7fa22da2f11a473f8b1bfe668bb3e148c8c343))
  - **typescript:** Mise à jour vers la `v4.1.3` ([#790](https://github.com/assurance-maladie-digital/design-system/pull/790)) ([d761ff2](https://github.com/assurance-maladie-digital/design-system/commit/d761ff2a16bfc53da2d00403253e4195fcedcde1))
  - **@vue/test-utils:** Mise à jour vers la `v1.1.2` ([#792](https://github.com/assurance-maladie-digital/design-system/pull/792)) ([08c1e39](https://github.com/assurance-maladie-digital/design-system/commit/08c1e39ae82900fae1c51db96dc56807a3c9a31b))
  - **@babel/preset-env:** Mise à jour vers la `v7.12.11` ([#795](https://github.com/assurance-maladie-digital/design-system/pull/795)) ([28a9507](https://github.com/assurance-maladie-digital/design-system/commit/28a9507d84456bb5b9580deb132bf2616068e192))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.4.1` ([#797](https://github.com/assurance-maladie-digital/design-system/pull/797)) ([b75a4b9](https://github.com/assurance-maladie-digital/design-system/commit/b75a4b9b7646a69859c43db0624142eeeef2813b))
  - **vuetify:** Mise à jour vers la `v2.4.2` ([#801](https://github.com/assurance-maladie-digital/design-system/pull/801)) ([7d08907](https://github.com/assurance-maladie-digital/design-system/commit/7d08907945f194aa1aa28181b44812d837f44512))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.6` ([#803](https://github.com/assurance-maladie-digital/design-system/pull/803)) ([16c8636](https://github.com/assurance-maladie-digital/design-system/commit/16c863624250126428b9a0a2eadcb5f6c5a81f1b))
  - **dayjs:** Mise à jour vers la `v1.10.3` ([#804](https://github.com/assurance-maladie-digital/design-system/pull/804)) ([e23f9d2](https://github.com/assurance-maladie-digital/design-system/commit/e23f9d29e8c8baad5a3f3014ba598ed294c1a25f))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.4.1` ([#805](https://github.com/assurance-maladie-digital/design-system/pull/805) ([111e636](https://github.com/assurance-maladie-digital/design-system/commit/111e63636c97c38bdf8e4c2d8014a1e659765c55))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.9` ([#806](https://github.com/assurance-maladie-digital/design-system/pull/806)) ([4266529](https://github.com/assurance-maladie-digital/design-system/commit/4266529ec5da9e4c9ada11a82f8653427d6163a1))
  - **core-js:** Mise à jour vers la `v3.8.2` ([#808](https://github.com/assurance-maladie-digital/design-system/pull/808)) ([3d3982c](https://github.com/assurance-maladie-digital/design-system/commit/3d3982c4aca154a6dd243490f2d14e723f6cb930))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.10` ([#809](https://github.com/assurance-maladie-digital/design-system/pull/809)) ([4ff6aba](https://github.com/assurance-maladie-digital/design-system/commit/4ff6abad56ad22cd67de3566cecc5f3bba36478a))
  - **@types/jest:** Mise à jour vers la `v26.0.20` ([#810](https://github.com/assurance-maladie-digital/design-system/pull/810)) ([7a480d1](https://github.com/assurance-maladie-digital/design-system/commit/7a480d1258cdab2d875382598ebe550576ee5b0e))
  - **sass-loader:** Mise à jour vers la `v10.1.1` ([#818](https://github.com/assurance-maladie-digital/design-system/pull/818)) ([47b8c28](https://github.com/assurance-maladie-digital/design-system/commit/47b8c289e468c123907cc9ac976a7a7cd9d553c4))
  - **webpack:** Mise à jour vers la `v4.46.0` ([#819](https://github.com/assurance-maladie-digital/design-system/pull/819)) ([33e5960](https://github.com/assurance-maladie-digital/design-system/commit/33e59603c9ef1490b3a2aa55ff0fca06ec8f44cc))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.13.0` ([#820](https://github.com/assurance-maladie-digital/design-system/pull/820)) ([df241b9](https://github.com/assurance-maladie-digital/design-system/commit/df241b90b83e8b5e9f53dd9c0b090748d9b2dc95))
  - **sass:** Mise à jour vers la `v1.32.4` ([#821](https://github.com/assurance-maladie-digital/design-system/pull/821)) ([261ba15](https://github.com/assurance-maladie-digital/design-system/commit/261ba152fec64229965a27fa00590cefb805da64))
  - **@types/node:** Mise à jour vers la `v12.19.14` ([#823](https://github.com/assurance-maladie-digital/design-system/pull/823)) ([23668ac](https://github.com/assurance-maladie-digital/design-system/commit/23668acba84ec2bb32f91f8554d7c243f655d733))
  - **eslint:** Mise à jour vers la `v7.18.0` ([#824](https://github.com/assurance-maladie-digital/design-system/pull/824) ([154548e](https://github.com/assurance-maladie-digital/design-system/commit/154548e41d354e98dfe91db5a8fb81c769d2b629))
  - **@mdi/js:** Mise à jour vers la `v5.9.55` ([#825](https://github.com/assurance-maladie-digital/design-system/pull/825)) ([bafb88e](https://github.com/assurance-maladie-digital/design-system/commit/bafb88e51b4c6decb6e816a7d3e975ef9013b545))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v31.0.7` ([#826](https://github.com/assurance-maladie-digital/design-system/pull/826)) ([32722e1](https://github.com/assurance-maladie-digital/design-system/commit/32722e137368adf04326682952c1c1341e47c929))

### 📚 Guide de migration

#### Utiliser les styles de Vue Dot

Les styles communs aux applications tels que que les ajustements de Vuetify et les classes utilitaires les plus utilisées ont été ajoutés dans Vue Dot, vous pouvez donc supprimer ces styles de vos projets.

Certaines classes ont été renommées par convention :

```diff
-class="custom-table"
+class="vd-custom-table"
```

```diff
-class="no-max-width"
+class="max-width-none"
```

## v2.0.0-beta.4

**Version publiée le 30/11/2020.**

Cette version comporte l'ajout des champs personnalisés sur le FormBuilder ainsi que plusieurs correctifs sur Vue Dot, Vue Dash et le FormBuilder.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **ErrorPage:** Correction du type de la prop `btnRoute` ([#736](https://github.com/assurance-maladie-digital/design-system/pull/736)) ([9b9bbd2](https://github.com/assurance-maladie-digital/design-system/commit/9b9bbd25afbe722e3cd5275a2a370dca9e1fedc4))
  - **LangBtn:** Correction de la valeur par défaut de la prop `availableLanguages` ([#737](https://github.com/assurance-maladie-digital/design-system/pull/737)) ([e6cdeac](https://github.com/assurance-maladie-digital/design-system/commit/e6cdeac5ab9c3eedfcce277fec6657e4d57c78a1))
  - **FileUpload:** Correction du type `ErrorCodeType` et de l'interface `ErrorEvent` ([#738](https://github.com/assurance-maladie-digital/design-system/pull/738)) ([d00088f](https://github.com/assurance-maladie-digital/design-system/commit/d00088f5a2584b8ae2dcc6d1464f76e47f5b4f19))
  - **peerDependencies:** Correction d'une dépendance `@cnamts/design-tokens` manquante ([#739](https://github.com/assurance-maladie-digital/design-system/pull/739)) ([bab2654](https://github.com/assurance-maladie-digital/design-system/commit/bab26549758ef8dd93494e02fd406a9e2b0b7c56))
  - **PaginatedTable:** Correction de l'événement `update:options` émis deux fois ([#766](https://github.com/assurance-maladie-digital/design-system/pull/766)) ([6484e72](https://github.com/assurance-maladie-digital/design-system/commit/6484e72a6d665f773264db83e677533ff5fcb403))
  - **rules:** Correction des messages d'erreur des règles de validation `notAfterToday` et `notBeforeToday` ([#767](https://github.com/assurance-maladie-digital/design-system/pull/767)) ([6c1f24a](https://github.com/assurance-maladie-digital/design-system/commit/6c1f24acf453dac9018b5ed839dab9dad8a3c4fb))

- ♿️ **Accessibilité**
  - **HeaderLoading:** Ajout des attributs ARIA ([#758](https://github.com/assurance-maladie-digital/design-system/pull/758)) ([2db6606](https://github.com/assurance-maladie-digital/design-system/commit/2db660648e1e2565c0efe1f59a95c9d3198ca5a5))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **config:** Correction de la variable d'environnement `VUE_APP_VERSION` déclarée dans `vueDotLoader` ([#750](https://github.com/assurance-maladie-digital/design-system/pull/750)) ([d265dac](https://github.com/assurance-maladie-digital/design-system/commit/d265dacf0386e0b213da216818873a945d9e75b1))
  - **template:** Correction de la variable `maintenance` non définie dans `AppHeader` ([#751](https://github.com/assurance-maladie-digital/design-system/pull/751)) ([8519cc9](https://github.com/assurance-maladie-digital/design-system/commit/8519cc915cff09c91b497de37806d1c5ad4c666c))

- 🔥 **Suppressions**
  - **template:** Suppression d'un `margin-left` dupliqué dans le composant `AppHeader` ([#740](https://github.com/assurance-maladie-digital/design-system/pull/740)) ([0b2931a](https://github.com/assurance-maladie-digital/design-system/commit/0b2931af250119a37c96086d623bec2e50655e2d))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances et de Cypress vers la `v6` ([#761](https://github.com/assurance-maladie-digital/design-system/pull/761)) ([e7ad211](https://github.com/assurance-maladie-digital/design-system/commit/e7ad21116140a9be866ea6affd73bc62890668d3))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **fields:** Ajout des champs personnalisés ([#729](https://github.com/assurance-maladie-digital/design-system/pull/729)) ([2748f63](https://github.com/assurance-maladie-digital/design-system/commit/2748f63573b849380ccc79a72f8e51f7c671a04c))

- 🐛 **Corrections de bugs**
  - **peerDependencies:** Correction des intervalles de versions des dépendances ([#721](https://github.com/assurance-maladie-digital/design-system/pull/721)) ([951f21a](https://github.com/assurance-maladie-digital/design-system/commit/951f21ae9e6ad935a5fdf92a83d283a82769a526))
  - **ChoiceButtonField:** Correction de la largeur du champ avec la prop `inline` ([#759]https://github.com/assurance-maladie-digital/design-system/pull/759) ([534a729](https://github.com/assurance-maladie-digital/design-system/commit/534a7294b39ea0ddfc26dcf4da023d576766c9f2))

- ♻️ **Refactoring**
  - **ChoiceField:** Utilisation d'un getter pour `isOtherActive` ([#760](https://github.com/assurance-maladie-digital/design-system/pull/760)) ([08064c7](https://github.com/assurance-maladie-digital/design-system/commit/08064c78cad819a605c45b9d5504e37fc12a4fc7))

- 🚨 **Lint**
  - **global:** Correction des erreurs de lint ([#741](https://github.com/assurance-maladie-digital/design-system/pull/741)) ([fbb696c](https://github.com/assurance-maladie-digital/design-system/commit/fbb696cf8be995ad3b9a93831acd7fb27393c9ea))

### Interne

- 🔧 **Configuration**
  - **ci:** Remplacement de Travis CI par CircleCI ([#749](https://github.com/assurance-maladie-digital/design-system/pull/749)) ([d55d994](https://github.com/assurance-maladie-digital/design-system/commit/d55d99476f660a5608da42891053fe079083b2db))
  - **jest:** Utilisation de TypeScript pour la configuration de Jest ([#752](https://github.com/assurance-maladie-digital/design-system/pull/752)) ([1b6fe3b](https://github.com/assurance-maladie-digital/design-system/commit/1b6fe3b3f058b970b2700eaccb987834ccd6954e))
  - **config:** Ajout du champ `engines` dans le fichier `package.json` ([#754](https://github.com/assurance-maladie-digital/design-system/pull/754)) ([51752d3](https://github.com/assurance-maladie-digital/design-system/commit/51752d3661a1e290b16fbd930f5a0d5ba3684198))

- 📝 **Documentation**
  - **CHANGELOG:** Correction du fichier CHANGELOG ([#720](https://github.com/assurance-maladie-digital/design-system/pull/720)) ([5f94ff5](https://github.com/assurance-maladie-digital/design-system/commit/5f94ff5ac4efd685a332135a64c54c9b9c0c882c))
  - **pull-requests:** Mise à jour du template ([#728](https://github.com/assurance-maladie-digital/design-system/pull/728)) ([847dcd1](https://github.com/assurance-maladie-digital/design-system/commit/847dcd115aba8cbab0ac5b64c73458b81aae628b))
  - **issues:** Ajout d'un template pour les rapports de bugs ([#713](https://github.com/assurance-maladie-digital/design-system/pull/713)) ([ac7ae4a](https://github.com/assurance-maladie-digital/design-system/commit/ac7ae4ad566538122281e44e9c3efe0187205f25))
  - **issues:** Ajout d'un template pour les demandes de nouvelles fonctionnalités ([#712](https://github.com/assurance-maladie-digital/design-system/pull/712)) ([db9cacd](https://github.com/assurance-maladie-digital/design-system/commit/db9cacda9a0123f03b6a822ac85f304067e89201))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#762](https://github.com/assurance-maladie-digital/design-system/pull/762)) ([722445f](https://github.com/assurance-maladie-digital/design-system/commit/722445fd2eb6ed5d6e3649ccbf14f257569cb633))

- ⬆️ **Dépendances**
  - **copy-webpack-plugin:** Mise à jour vers la `v6.3.2` ([#722](https://github.com/assurance-maladie-digital/design-system/pull/722)) ([9591a89](https://github.com/assurance-maladie-digital/design-system/commit/9591a899e29386117b4cc0983e11adddc39b2a82))
  - **typescript:** Mise à jour vers la `v4.1.2` ([#724](https://github.com/assurance-maladie-digital/design-system/pull/724)) ([fe50608](https://github.com/assurance-maladie-digital/design-system/commit/fe5060829a7d67a2fe7480ff919c0365888f3747))
  - **babel:** Mise à jour du monorepo vers la `v7.12.7` ([#726](https://github.com/assurance-maladie-digital/design-system/pull/726)) ([8f02cd9](https://github.com/assurance-maladie-digital/design-system/commit/8f02cd92b474b2588daeda6297422fff9ded0894))
  - **eslint:** Mise à jour vers la `v7.13.0` ([#727](https://github.com/assurance-maladie-digital/design-system/pull/727) ([d91574e](https://github.com/assurance-maladie-digital/design-system/commit/d91574ec692f192322b91f08e12c4c7a5becaa35))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.8.2` ([#730](https://github.com/assurance-maladie-digital/design-system/pull/730)) ([140be35](https://github.com/assurance-maladie-digital/design-system/commit/140be3578fc1e80d8660887e83adfeb5c64be81f))
  - **lint-staged:** Mise à jour vers la `v10.5.2` ([#732](https://github.com/assurance-maladie-digital/design-system/pull/732)) ([e23ed5f](https://github.com/assurance-maladie-digital/design-system/commit/e23ed5f99bb2aad8aa8ab25689cc5e9bae74c58d))
  - **vuetify:** Mise à jour vers la `v2.3.19` ([#743](https://github.com/assurance-maladie-digital/design-system/pull/743)) ([a0f434f](https://github.com/assurance-maladie-digital/design-system/commit/a0f434f6abe445ece6dbb0ec7e501c3ac5ee2e3a))
  - **@babel/core:** Mise à jour vers la `v7.12.9` ([#744](https://github.com/assurance-maladie-digital/design-system/pull/744)) ([e72b0ce](https://github.com/assurance-maladie-digital/design-system/commit/e72b0ce07bfbcee27c53e77b517153932f6260cc))
  - **@types/node:** Mise à jour vers la `v12.19.7` ([#745](https://github.com/assurance-maladie-digital/design-system/pull/745)) ([fd9d165](https://github.com/assurance-maladie-digital/design-system/commit/fd9d165c349351111a604a722f857d4eabfc3e2c))
  - **vuex:** Mise à jour vers la `3.6.0` ([#747](https://github.com/assurance-maladie-digital/design-system/pull/747)) ([1ca4491](https://github.com/assurance-maladie-digital/design-system/commit/1ca44918ffacc2afd857fcfeee0f713ba54324f5))
  - **core-js:** Mise à jour vers la `v3.8.0` ([#748](https://github.com/assurance-maladie-digital/design-system/pull/748)) ([3d61261](https://github.com/assurance-maladie-digital/design-system/commit/3d61261f20add9c22e1722fc24dd94c28ef3ee06))
  - **babel-loader:** Mise à jour vers la `v8.2.2` ([#756](https://github.com/assurance-maladie-digital/design-system/pull/756)) ([beec1d8](https://github.com/assurance-maladie-digital/design-system/commit/beec1d8bc22740b37ec4795582fbd5dfcadc6482))

## v2.0.0-beta.3

**Version publiée le 18/11/2020.**

Cette version comporte plusieurs mises à jour du template de Vue Dash comme l'ajout des options FormBuilder et Cypress, ainsi que le Tree shaking de Vue Dot, et d'autres mises à jour comme la refonte du composant `ErrorPage`.

### Vue Dot

- ♻️ **Refactoring**
  - **DataList:** Renommage de l'interface `IDataList` en `DataList` ([#649](https://github.com/assurance-maladie-digital/design-system/pull/649)) ([62cf170](https://github.com/assurance-maladie-digital/design-system/commit/62cf170b49cc6bad6d02c56e1fcf75d653dac303))
  - **ErrorPage:** Refonte du composant ([#651](https://github.com/assurance-maladie-digital/design-system/pull/651)) ([5e05fd1](https://github.com/assurance-maladie-digital/design-system/commit/5e05fd14efe43d544e1cf24507926db29133379a))

### Vue Dash

- ✨ **Nouvelles fonctionnalités**
  - **prompts:** Ajout de l'option FormBuilder ([#636](https://github.com/assurance-maladie-digital/design-system/pull/636)) ([dfe1c80](https://github.com/assurance-maladie-digital/design-system/commit/dfe1c80a09d9acdf6ecca2c72de22708938b5784))
  - **prompts:** Ajout de l'option Cypress ([#567](https://github.com/assurance-maladie-digital/design-system/pull/567)) ([7555363](https://github.com/assurance-maladie-digital/design-system/commit/7555363bae9b65feed20faa3360aadbcc41d3efc))
  - **config:** Ajout du tree-shaking de VueDot ([#685](https://github.com/assurance-maladie-digital/design-system/pull/685)) ([de1bf9e](https://github.com/assurance-maladie-digital/design-system/commit/de1bf9ea69a2797707202e8213d950ecfd0c9b41))
  - **template:** Ajout d'une transition par défaut sur les liens ([#716](https://github.com/assurance-maladie-digital/design-system/pull/716)) ([4da5d45](https://github.com/assurance-maladie-digital/design-system/commit/4da5d4557cf00190df1367fbeb7fd60663e33e9c))

- 🐛 **Corrections de bugs**
  - **template:** Correction des attributs `data-cy` manquants ([#695](https://github.com/assurance-maladie-digital/design-system/pull/695)) ([b54b359](https://github.com/assurance-maladie-digital/design-system/commit/b54b359eef4c537371664285c10eebb38e33416c))
  - **template:** Correction du fichier d'entrée ([#715](https://github.com/assurance-maladie-digital/design-system/pull/715)) ([d137477](https://github.com/assurance-maladie-digital/design-system/commit/d13747748bb9aebd1b057990e1ef178ce71eda3f))

- ♻️ **Refactoring**
  - **template:** Refonte du fichier `index.html` ([#682](https://github.com/assurance-maladie-digital/design-system/pull/682)) ([195d33d](https://github.com/assurance-maladie-digital/design-system/commit/195d33dbe0e051214eb2aa09c57af4dc4491f585))
  - **template:** Suppression des routes dans les traductions ([#694](https://github.com/assurance-maladie-digital/design-system/pull/694)) ([48ff81d](https://github.com/assurance-maladie-digital/design-system/commit/48ff81d12d1961c152b8d5196178eae1fc6b70fe))
  - **template:** Utilisation de l'objet `window` pour déclarer les variables globales ([#717](https://github.com/assurance-maladie-digital/design-system/pull/717))

- 🔥 **Suppressions**
  - **template:** Suppression des fichiers JavaScript par défaut ([#711](https://github.com/assurance-maladie-digital/design-system/pull/711)) ([07205d5](https://github.com/assurance-maladie-digital/design-system/commit/07205d58b01180a32599106cdb2374f3b0fc8782))

- 🚨 **Lint**
  - **config:** Ajout d'ESLint ([#683](https://github.com/assurance-maladie-digital/design-system/pull/683)) ([bf09d5f](https://github.com/assurance-maladie-digital/design-system/commit/bf09d5f62b71b076d0be3c03de18e2df5ad9175e))
  - **config:** Ajout des descriptions JSDoc manquantes dans `vueDotLoader` ([#708](https://github.com/assurance-maladie-digital/design-system/pull/708)) ([8f136bf](https://github.com/assurance-maladie-digital/design-system/commit/8f136bf385281e9cd096cafdffc3638c55a641ec))

- 🔧 **Configuration**
  - **template:** Suppression de TSLint et mise à jour de la configuration d'ESLint ([#642](https://github.com/assurance-maladie-digital/design-system/pull/642)) ([9f2a06](https://github.com/assurance-maladie-digital/design-system/commit/9f2a06aba4a188a4ebfd58ce6bf407e1c1a88606))
  - **template:** Mise à jour d'ESLint et de la configuration ([#693](https://github.com/assurance-maladie-digital/design-system/pull/693)) ([9f13e39](https://github.com/assurance-maladie-digital/design-system/commit/9f13e392bc76a003a3b3fac6007bf323b702c57d))

- ⬆️ **Dépendances**
  - **template:** Mise à jour de Cypress vers la `v5` ([#707](https://github.com/assurance-maladie-digital/design-system/pull/707) ([6abfc29](https://github.com/assurance-maladie-digital/design-system/commit/6abfc295ad70827d06c1f54eddd38f1457b339b7))
  - **template:** Mise à jour de Jest vers la `v26` ([#709](https://github.com/assurance-maladie-digital/design-system/pull/709) ([587c539](https://github.com/assurance-maladie-digital/design-system/commit/587c5394e9508a5688ba04efed3af23d73f1c4fe))
  - **template:** Mise à jour des dépendances ([#718](https://github.com/assurance-maladie-digital/design-system/pull/718)) ([aee640e](https://github.com/assurance-maladie-digital/design-system/commit/aee640e66c48cbed086581d254c53a4cbe5718a0))

### Interne

- 🚨 **Lint**
  - **config:** Mise à jour des règles de lint ([#651](https://github.com/assurance-maladie-digital/design-system/pull/651)) ([e3acd43](https://github.com/assurance-maladie-digital/design-system/commit/e3acd43e3e14726c0e45b29b58363eacc9e26fb3))

- 📝 **Documentation**
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#719](https://github.com/assurance-maladie-digital/design-system/pull/719)) ([7814d0d](https://github.com/assurance-maladie-digital/design-system/commit/7814d0d65869d802aaf36d9c5127a5d4a3d4770b))

- ⬆️ **Dépendances**
  - **@types/jest:** Mise à jour vers la `v26.0.15` ([#650](https://github.com/assurance-maladie-digital/design-system/pull/650)) ([0be84b2](https://github.com/assurance-maladie-digital/design-system/commit/0be84b2be875be1316f32c673afd95d6083a7b51))
  - **@mdi/js:** Mise à jour vers la `v5.8.55` ([#662](https://github.com/assurance-maladie-digital/design-system/pull/662)) ([7495ac1](https://github.com/assurance-maladie-digital/design-system/commit/7495ac1a18293f10879a494f527d6705a06b81ac))
  - **typescript:** Mise à jour vers la `v4.0.5` ([#667](https://github.com/assurance-maladie-digital/design-system/pull/667)) ([a285256](https://github.com/assurance-maladie-digital/design-system/commit/a285256f1fc588f30316b7c04665b4c70d270c59))
  - **@types/figlet:** Mise à jour vers la `v1.2.1` ([#669](https://github.com/assurance-maladie-digital/design-system/pull/669)) ([ec2195c](https://github.com/assurance-maladie-digital/design-system/commit/ec2195c625453256be39096e07217719e4bf1c7b))
  - **lint-staged:** Mise à jour vers la `v10.5.1` ([#672](https://github.com/assurance-maladie-digital/design-system/pull/672)) ([87fd841](https://github.com/assurance-maladie-digital/design-system/commit/87fd841109408c00f9c0bb9b389ff85813e38ed0))
  - **@vue/test-utils:** Mise à jour vers la `v1.1.1` ([#673](https://github.com/assurance-maladie-digital/design-system/pull/673)) ([0f3f65f](https://github.com/assurance-maladie-digital/design-system/commit/0f3f65fc22249ee0703da73be088f48fd0a6c727))
  - **jest:** Mise à jour vers la `v26.6.3` ([#675](https://github.com/assurance-maladie-digital/design-system/pull/675)) ([f9f1220](https://github.com/assurance-maladie-digital/design-system/commit/f9f1220490832c627121da0713cbc1842966c0de))
  - **sass:** Mise à jour vers la `v1.29.0` ([#679](https://github.com/assurance-maladie-digital/design-system/pull/679)) ([6c12086](https://github.com/assurance-maladie-digital/design-system/commit/6c12086647d44b2d53ce1fd8e3d8cd3a52d239f7))
  - **vue-router:** Mise à jour vers la `v3.4.9` ([#684](https://github.com/assurance-maladie-digital/design-system/pull/684)) ([e7fdf8a](https://github.com/assurance-maladie-digital/design-system/commit/e7fdf8a20214c8d7840bac3dcaa480d12c6f8701))
  - **core-js:** Mise à jour vers la `v3.7.0` ([#686](https://github.com/assurance-maladie-digital/design-system/pull/686)) ([dc1c015](https://github.com/assurance-maladie-digital/design-system/commit/dc1c0154f94335bb7983a8ce3972fdf31793d0d0))
  - **eslint:** Mise à jour vers la `v7.13.0` ([#687](https://github.com/assurance-maladie-digital/design-system/pull/687) ([f9f9a72](https://github.com/assurance-maladie-digital/design-system/commit/f9f9a72d00d4172f4b6e565d9692cefa0aef17a9))
  - **ts-jest:** Mise à jour vers la `v26.4.4` ([#688](https://github.com/assurance-maladie-digital/design-system/pull/688)) ([43c61b7](https://github.com/assurance-maladie-digital/design-system/commit/43c61b70c21c249db01ea50faea6cc717ea3c0b3))
  - **dayjs:** Mise à jour vers la `v1.9.6` ([#691](https://github.com/assurance-maladie-digital/design-system/pull/691)) ([ce0e0ef](https://github.com/assurance-maladie-digital/design-system/commit/ce0e0ef609a3060e8d2165a1251e07734c4d84cb))
  - **babel-loader:** Mise à jour vers la `v8.2.1` ([#696](https://github.com/assurance-maladie-digital/design-system/pull/696)) ([efa393c](https://github.com/assurance-maladie-digital/design-system/commit/efa393cc12e7efcedc3f5f2ea06a140f1fad12f4))
  - **sass-loader:** Mise à jour vers la `v10.1.0` ([#698](https://github.com/assurance-maladie-digital/design-system/pull/698)) ([8dfd17](https://github.com/assurance-maladie-digital/design-system/commit/8dfd17dca7d30d5ea69f79cf04bbe7b1e4c13904))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.4` ([#699](https://github.com/assurance-maladie-digital/design-system/pull/699)) ([df9d858](https://github.com/assurance-maladie-digital/design-system/commit/df9d858c431291681ce940f9458413e9230c5ad4))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.3.1` ([#700](https://github.com/assurance-maladie-digital/design-system/pull/700)) ([0dc6f5f](https://github.com/assurance-maladie-digital/design-system/commit/0dc6f5f91384bb67953567a39a6c6c5defffbf39))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.7.8` ([#701](https://github.com/assurance-maladie-digital/design-system/pull/701)) ([45c01ae](https://github.com/assurance-maladie-digital/design-system/commit/45c01aeebba3f9f5e36e8fb0f9b3a3523e70ca92))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.9` ([#704](https://github.com/assurance-maladie-digital/design-system/pull/704)) ([c1ac15a](https://github.com/assurance-maladie-digital/design-system/commit/c1ac15a2b38f1a7ce33edb8a0a31607439156b46))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.8.1` ([#706](https://github.com/assurance-maladie-digital/design-system/pull/706)) ([2b842e8](https://github.com/assurance-maladie-digital/design-system/commit/2b842e865b0dc319c8bb5772feb2ccf79b212136))
  - **vuetify:** Mise à jour vers la `v2.3.18` ([#710](https://github.com/assurance-maladie-digital/design-system/pull/710)) ([316014a](https://github.com/assurance-maladie-digital/design-system/commit/316014ac2d10c194863abce6f862b106deb9dca3))
  - **@types/node:** Mise à jour vers la `v12.19.5` ([#714](https://github.com/assurance-maladie-digital/design-system/pull/714)) ([5c06166](https://github.com/assurance-maladie-digital/design-system/commit/5c06166b5e175480d0a92be26d9244061f569215))

### 📚 Guide de migration

#### Renommer l'interface `IDataList`

L'interface `IDataList` a été renommée en `DataList` :

```diff
-import { IDataList } from '@cnamts/vue-dot/src/elements/DataList/types';
+import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';
```

#### Renommer `cta` et `title` sur `ErrorPage`

Les props `cta` et `title` ont été renommées en `btn-text` et `page-title`, et la prop `btn-text` a maintenant la valeur `Retour à l'accueil` par défaut :

```diff
<ErrorPage
-	title="Page non trouvée"
+	page-title="Page non trouvée"
	message="Il semblerait qu'il y ait eu une erreur !"
	code="404"
-	cta="Retour à l'accueil"
>
```

Pour désactiver le bouton vous devez maintenant utiliser la prop `no-btn` :

```diff
<ErrorPage
	page-title="Page non trouvée"
	message="Il semblerait qu'il y ait eu une erreur !"
+	no-btn
>
```

#### Tree shaking de Vue Dot

Le Tree shaking est maintenant disponible dans Vue Dash via la fonction `vueDotLoader`, cela permet de charger automatiquement les composants utilisés, et de réduire la taille finale de l'application en ne chargeant pas les composants non utilisés.

Vous pouvez utiliser cette fonction dans le fichier `vue.config.js` :

```diff
process.env.VUE_APP_VERSION = require('./package.json').version;

+const { vueDotLoader } = require('@cnamts/vue-cli-plugin-vue-dash/vueDotLoader');

module.exports = {
+	chainWebpack: config => {
+		// Auto-load VueDot components
+		config.plugin('VuetifyLoaderPlugin').tap(vueDotLoader);
+	},
  // ...
};
```

Puis supprimer l'import de Vue Dot dans votre fichier de plugin :

```diff
// src/plugins/vue-dot.ts
import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

import '@cnamts/vue-dot/dist/vue-dot.css';
-import VueDot from '@cnamts/vue-dot';

// Import the theme styles
import '@/theme/styles/index.scss';

// Register v-facade directive
import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

-Vue.use(VueDot);
```

Si vous utilisez la directive `v-debounce`, vous devez l'importer directement :

```diff
+import { debounce } from '@cnamts/vue-dot/src/directives/debounce';

+Vue.directive('debounce', debounce);
```

#### Mettre à jour les variables globales

Il est maintenant recommandé de définir les variables globales en utilisant l'objet `window` afin d'être plus explicite et d'améliorer la maintenabilité des applications, nous vous recommandons de mettre à jour vos applications en suivant les modifications de la Pull Request [#717](https://github.com/assurance-maladie-digital/design-system/pull/717).

#### Migrer de TSLint vers ESLint

TSLint est maintenant déprécié depuis plus d'un an en faveur de [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).

Pour mettre à jour, vous devez supprimer le fichier `tslint.json`, et nous vous conseillons également de mettre à jour ESLint vers la version 7, pour cela vous pouvez suivre les modifications de la Pull Request [#693](https://github.com/assurance-maladie-digital/design-system/pull/693).

#### Mettre à jour Jest et Cypress

Nous vous conseillons de mettre à jour Jest de la `v24` à la `v26`, pour cela vous devez ajouter le champ `resolutions` dans votre fichier `package.json` :

```diff
+"resolutions": {
+	"jest": "^26.6.3",
+	"ts-jest": "^26.4.4",
+	"babel-jest": "^26.6.3"
+}
```

Ainsi que de mettre à jour Cypress de la `v3` à la `v5`, pour cela vous devez mettre à jour `@vue/cli-plugin-e2e-cypress` à la `v4.5.9`, puis ajouter `cypress` dans le champ `resolutions` :

```diff
"resolutions": {
	"jest": "^26.6.3",
	"ts-jest": "^26.4.4",
	"babel-jest": "^26.6.3",
+	"cypress": "^4.6.0"
}
```

## v2.0.0-beta.2

**Version publiée le 19/10/2020.**

Cette version comporte l'ajout du composant `ErrorPage` ainsi que plusieurs correctifs sur le FormBuilder et la refonte du composant `LangBtn`.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **ErrorPage:** Ajout d'un nouveau template ([#604](https://github.com/assurance-maladie-digital/design-system/pull/604)) ([ce55807](https://github.com/assurance-maladie-digital/design-system/commit/ce558079ead05a855303576856bdc4b1ead37c61))

- ♻️ **Refactoring**
  - **LangBtn:** Refonte du composant ([#621](https://github.com/assurance-maladie-digital/design-system/pull/621)) ([e795fbb](https://github.com/assurance-maladie-digital/design-system/commit/e795fbb178f2293e38cb5ed103e49fb25ad26f7f))

### Vue Dash

- 🔥 **Suppressions**
  - **template:** Utilisation du composant `ErrorPage` de Vue Dot ([#605](https://github.com/assurance-maladie-digital/design-system/pull/605)) ([cea80b5](https://github.com/assurance-maladie-digital/design-system/commit/cea80b59029ef986bc3d0c4c4344c228d2e331e4))
  - **template:** Suppression des imports des composants globaux ([#580](https://github.com/assurance-maladie-digital/design-system/pull/580)) ([b9d8835](https://github.com/assurance-maladie-digital/design-system/commit/b9d8835c8693924a212d8425b955b5bdef7bebff))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#644](https://github.com/assurance-maladie-digital/design-system/pull/644)) ([9c78937](https://github.com/assurance-maladie-digital/design-system/commit/9c78937246b42887a79927f65c29a8ba503cf5cb))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **FormField:** Ajout de la gestion des messages d'erreur sur `ChoiceButtonField` ([#584](https://github.com/assurance-maladie-digital/design-system/pull/584)) ([43acdbd](https://github.com/assurance-maladie-digital/design-system/commit/43acdbd9b7c8e03adf0bc5ee429e8b309d551085))

- 🐛 **Corrections de bugs**
  - **FormField:** Correction des marges sur le champ période ([#580](https://github.com/assurance-maladie-digital/design-system/pull/580)) ([d8c8303](https://github.com/assurance-maladie-digital/design-system/commit/d8c8303e2ab9f6c8e43bf8abbcc7d73b74103527))
  - **FormField:** Correction de la largeur du champ textarea ([#609](https://github.com/assurance-maladie-digital/design-system/pull/609)) ([d927c36](https://github.com/assurance-maladie-digital/design-system/commit/d927c36cbab1b91865f98395ca7898bbfa82cb1f))
  - **FormField:** Correction de l'affichage du champ select lorsque la valeur est égale à zéro ([#591](https://github.com/assurance-maladie-digital/design-system/pull/591)) ([62b90ba](https://github.com/assurance-maladie-digital/design-system/commit/62b90bada5a69973fc8f17b40f64720acca9e711))
  - **FormField:** Correction de la sélection multiple sur `ChoiceField` ([#596](https://github.com/assurance-maladie-digital/design-system/pull/596)) ([875ce37](https://github.com/assurance-maladie-digital/design-system/commit/875ce37073640b77e92c72e555435c9ff6293ba3))
  - **FormField:** Correction de l'affichage des textes longs dans `ChoiceButtonField` ([#614](https://github.com/assurance-maladie-digital/design-system/pull/614)) ([cd5c51b](https://github.com/assurance-maladie-digital/design-system/commit/cd5c51b433ec97a3812c2a037630fb1d13ccd174))

### Interne

- 🔥 **Suppressions**
  - **global:** Suppression des anciens commentaires TSLint ([#587](https://github.com/assurance-maladie-digital/design-system/pull/587)) ([e0e162a](https://github.com/assurance-maladie-digital/design-system/commit/e0e162aa9e3f413701c1fb59c9dad4de62f995c3))

- 🚨 **Lint**
  - **config:** Mise à jour des règles de lint ([#582](https://github.com/assurance-maladie-digital/design-system/pull/582)) ([70a87ca](https://github.com/assurance-maladie-digital/design-system/commit/70a87ca774af580f3a86b65c955bd6877051d29a))

- 🔧 **Configuration**
  - **config:** Mise à jour de la version de yarn dans la configuration de Travis CI ([#589](https://github.com/assurance-maladie-digital/design-system/pull/589)) ([0a47260](https://github.com/assurance-maladie-digital/design-system/commit/0a47260c6b5cfb3782bb6b25a579af918987f38f))
  - **config:** Mise à jour de la taille maximale du build ([#607](https://github.com/assurance-maladie-digital/design-system/pull/607)) ([aa78533](https://github.com/assurance-maladie-digital/design-system/commit/aa785339f6f7d58936f307c71bd78595b2e72230))

- 📝 **Documentation**
  - **pull-requests:** Mise à jour du template ([#635](https://github.com/assurance-maladie-digital/design-system/pull/635)) ([bd95d61](https://github.com/assurance-maladie-digital/design-system/commit/bd95d6119b8559725ba9390ddc336a57ba342179))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#645](https://github.com/assurance-maladie-digital/design-system/pull/645)) ([8ad6d76](https://github.com/assurance-maladie-digital/design-system/commit/8ad6d76c6c43d06b602a3d3115b842d10eb09451))

- ⬆️ **Dépendances**
  - **typescript:** Mise à jour vers la `v4.0.3` ([#572](https://github.com/assurance-maladie-digital/design-system/pull/572)) ([3167679](https://github.com/assurance-maladie-digital/design-system/commit/31676794ecee410642c4b8112532e4fdb3b99705))
  - **ts-jest:** Mise à jour vers la `v26.4.1` ([#573](https://github.com/assurance-maladie-digital/design-system/pull/573)) ([b06f87b](https://github.com/assurance-maladie-digital/design-system/commit/b06f87b33356ec1ec7316015cb81e5f405727ba1))
  - **eslint:** Mise à jour de `eslint` et de `eslint-plugin-vue` vers la `v7` ([#582](https://github.com/assurance-maladie-digital/design-system/pull/582) ([70a87ca](https://github.com/assurance-maladie-digital/design-system/commit/70a87ca774af580f3a86b65c955bd6877051d29a))
  - **sass:** Mise à jour vers la `v1.27.0` ([#608](https://github.com/assurance-maladie-digital/design-system/pull/608)) ([a170b22](https://github.com/assurance-maladie-digital/design-system/commit/a170b22f21f759b537817836a143e70a407abd57))
  - **@vue/eslint-config-typescript:** Mise à jour vers la `v7` ([#610](https://github.com/assurance-maladie-digital/design-system/pull/610)) ([c6d91b7](https://github.com/assurance-maladie-digital/design-system/commit/c6d91b7ed9499adec0e9bc30109eeb535f0c7698))
  - **sass-loader:** Mise à jour vers la `v10.0.3` ([#613](https://github.com/assurance-maladie-digital/design-system/pull/613)) ([328894c](https://github.com/assurance-maladie-digital/design-system/commit/328894cf6f7148f31c7337c8fa939316f7882a2c))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.2.1` ([#615](https://github.com/assurance-maladie-digital/design-system/pull/615)) ([56966b7](https://github.com/assurance-maladie-digital/design-system/commit/56966b7adb342a84d0f4de4223d4bcbe7bf5070e))
  - **eslint:** Mise à jour vers la `v7.11.0` ([#582](https://github.com/assurance-maladie-digital/design-system/pull/582) ([04dde13](https://github.com/assurance-maladie-digital/design-system/commit/04dde131b2fd35e993e3a3e7dadedb9cfc62f732))
  - **fs-extra:** Mise à jour vers la `v9.0.2` ([#618](https://github.com/assurance-maladie-digital/design-system/pull/618)) ([5bb730b](https://github.com/assurance-maladie-digital/design-system/commit/5bb730b250d6836949bcf78f829e1812e8b80280))
  - **jest:** Mise à jour vers la `v26.5.3` ([#619](https://github.com/assurance-maladie-digital/design-system/pull/619)) ([b5523d4](https://github.com/assurance-maladie-digital/design-system/commit/b5523d455303be65118c0a259f6fc45cc01796cf))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4.4.1` ([#622](https://github.com/assurance-maladie-digital/design-system/pull/622)) ([b6c84d0](https://github.com/assurance-maladie-digital/design-system/commit/b6c84d00c747b50a200d11dee02fd41cc033f4cf))
  - **dayjs:** Mise à jour vers la `v1.9.3` ([#623](https://github.com/assurance-maladie-digital/design-system/pull/623)) ([94d53fd](https://github.com/assurance-maladie-digital/design-system/commit/94d53fd961d4a6d2c75919c619cda171ac19801e))
  - **vuetify:** Mise à jour vers la `v2.3.14` ([#626](https://github.com/assurance-maladie-digital/design-system/pull/626)) ([330605d](https://github.com/assurance-maladie-digital/design-system/commit/330605d6415ae542ddc18eff298b6d7293495901))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.6.5` ([#628](https://github.com/assurance-maladie-digital/design-system/pull/628)) ([e2a906f](https://github.com/assurance-maladie-digital/design-system/commit/e2a906f8116aa23a4ea9584f554349a42e18c037))
  - **@mdi/js:** Mise à jour vers la `v5.7.55` ([#629](https://github.com/assurance-maladie-digital/design-system/pull/629)) ([9e50f41](https://github.com/assurance-maladie-digital/design-system/commit/9e50f4107d8854314264e84b050f7bbe0cb5d731))
  - **vue-router:** Mise à jour vers la `v3.4.7` ([#633](https://github.com/assurance-maladie-digital/design-system/pull/633)) ([d91db7e](https://github.com/assurance-maladie-digital/design-system/commit/d91db7e3c9256ab581afc2ce1ac5131dbc0403d6))
  - **@types/node:** Mise à jour vers la `v12.12.68` ([#637](https://github.com/assurance-maladie-digital/design-system/pull/637)) ([f591a67](https://github.com/assurance-maladie-digital/design-system/commit/f591a6775185de0dd0eab77413122f7cd222dce8))
  - **babel:** Mise à jour du monorepo vers la `v7.12.3` ([#639](https://github.com/assurance-maladie-digital/design-system/pull/639)) ([b9cb467](https://github.com/assurance-maladie-digital/design-system/commit/b9cb467262829dcb2ad5eeed658d3187eec3bda3))
  - **lint-staged:** Mise à jour vers la `v10.4.2` ([#640](https://github.com/assurance-maladie-digital/design-system/pull/640)) ([74b4102](https://github.com/assurance-maladie-digital/design-system/commit/74b4102fae2a9a59221235dabcebf0c055870af6))
  - **eslint-plugin-vue:** Mise à jour vers la `v7.1.0` ([#641](https://github.com/assurance-maladie-digital/design-system/pull/641) ([d5f2fe1](https://github.com/assurance-maladie-digital/design-system/commit/d5f2fe1288ec7977914f48c35085c87f0f6b7f03))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.8` ([#643](https://github.com/assurance-maladie-digital/design-system/pull/643)) ([6259402](https://github.com/assurance-maladie-digital/design-system/commit/625940298f931da730a9e6e9c57e33f81062d81a))

### 📚 Guide de migration

#### Utiliser le composant `ErrorPage`

Le composant `ErrorPage` a été ajouté dans Vue Dot, vous pouvez donc le supprimer de votre projet. Il n'y a pas de modification sur l'API du composant.

#### Utiliser le type `Next`

Le type `Next` a été ajouté dans Vue Dot, vous pouvez également le supprimer de votre projet :

```diff
// src/router/navigationRedirect.ts
-import { Next } from './types';
+import { Next } from '@cnamts/vue-dot/src/types';
```

## v2.0.0-beta.1

**Version publiée le 18/09/2020.**

Cette version comporte plusieurs correctifs sur le template de Vue Dash ainsi que sur les composants `DataListItem` et `UploadWorkflow`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **DataListItem:** Correction d'une erreur avec les valeurs numériques ([#532](https://github.com/assurance-maladie-digital/design-system/pull/532)) ([1d1654f](https://github.com/assurance-maladie-digital/design-system/commit/1d1654fbd59378863beb1b1cfff9ae064fef803e))
  - **UploadWorkFlow:** Correction de l'événement `change` non émis lors de l'appel de `resetFile` ([#565](https://github.com/assurance-maladie-digital/design-system/pull/565)) ([6d7c8c9](https://github.com/assurance-maladie-digital/design-system/commit/6d7c8c9c07111aeb211df6fdbb65b06132904df3))
  - **UploadWorkFlow:** Correction de l'affichage des erreurs dans la liste ([#566](https://github.com/assurance-maladie-digital/design-system/pull/566)) ([f16c6b8](https://github.com/assurance-maladie-digital/design-system/commit/f16c6b81967d8a830526b493e33367f58f788083))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction de la dépendance `@cnamts/design-tokens` manquante ([#525](https://github.com/assurance-maladie-digital/design-system/pull/525)) ([c2f7c6a](https://github.com/assurance-maladie-digital/design-system/commit/c2f7c6ab1900ca75e0437130d130aa9a1ce591e0))
  - **template:** Correction d'une erreur de syntaxe SCSS dans le thème par défaut ([#528](https://github.com/assurance-maladie-digital/design-system/pull/528)) ([c776019](https://github.com/assurance-maladie-digital/design-system/commit/c776019d845ae4cc77005de56927e02ff54d11fe))
  - **template:** Correction des styles ([#529](https://github.com/assurance-maladie-digital/design-system/pull/529)) ([61219ba](https://github.com/assurance-maladie-digital/design-system/commit/61219ba4d35cae73a4542ac06f95509ea819175f))
  - **template:** Correction d'un polyfill manquant pour `vue-input-facade` pour IE 11 ([#559](https://github.com/assurance-maladie-digital/design-system/pull/559)) ([0415936](https://github.com/assurance-maladie-digital/design-system/commit/0415936ea50fe08e470494e83685f5b92811e35c))
  - **template:** Correction de `vue-input-facade` manquant dans `transpileDependencies` ([#570](https://github.com/assurance-maladie-digital/design-system/pull/570)) ([5a278c8](https://github.com/assurance-maladie-digital/design-system/commit/5a278c88345bea1a81806eec4cc5dbbed29ed288))

- ♻️ **Refactoring**
  - **template:** Utilisation des classes d'aide de Vuetify plutôt que des styles personnalisés ([#560](https://github.com/assurance-maladie-digital/design-system/pull/560)) ([c99df42](https://github.com/assurance-maladie-digital/design-system/commit/c99df4222263ac23cea1b4398db02862822f9934))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#564](https://github.com/assurance-maladie-digital/design-system/pull/564)) ([753fc73](https://github.com/assurance-maladie-digital/design-system/commit/753fc73a21890278413997762b13025c24d790a9))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **FormField:** Gestion des sauts de ligne dans le tooltip ([#540](https://github.com/assurance-maladie-digital/design-system/pull/540)) ([50cdcf9](https://github.com/assurance-maladie-digital/design-system/commit/50cdcf95fba42120b368e95327e0bc2e01cc3b91))

### Interne

- 🔒 **Sécurité**
  - **node-fetch:** Mise à jour vers de la `v2.6.0` vers la `v2.6.1` ([#554](https://github.com/assurance-maladie-digital/design-system/pull/554)) ([7ee0288](https://github.com/assurance-maladie-digital/design-system/commit/7ee02884dba451756575f29d8aef5b90bea71cc3))

- 🔧 **Configuration**
  - **playground:** Correction des playgrounds ([102a668](https://github.com/assurance-maladie-digital/design-system/commit/102a668dd4ab4a7e9819c736c9a2aacbc714ecbc))

- 📝 **Documentation**
  - **pull-requests:** Mise à jour du template ([#537](https://github.com/assurance-maladie-digital/design-system/pull/537)) ([b1448d1](https://github.com/assurance-maladie-digital/design-system/commit/b1448d14366bfb4010c74e5792861f93cf180c44))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#569](https://github.com/assurance-maladie-digital/design-system/pull/569)) ([d3c4e19](https://github.com/assurance-maladie-digital/design-system/commit/d3c4e1910240abae36f84c53554fb2bdcb59f4cd))

- ⬆️ **Dépendances**
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.4` ([#514](https://github.com/assurance-maladie-digital/design-system/pull/514)) ([b2aba53](https://github.com/assurance-maladie-digital/design-system/commit/b2aba5346a8dd310fb7bebc59a1d4255ec5ca104))
  - **vue:** Mise à jour vers la `v2.6.12` ([#518](https://github.com/assurance-maladie-digital/design-system/pull/518)) ([63bf6c9](https://github.com/assurance-maladie-digital/design-system/commit/63bf6c9a2ff7c1093337e4b3008c7a467b08510d))
  - **@babel/core:** Mise à jour vers la `v7.11.4` ([#521](https://github.com/assurance-maladie-digital/design-system/pull/521)) ([51f80d7](https://github.com/assurance-maladie-digital/design-system/commit/51f80d725eca972f9e8ba86ed3a175d60cee51d5))
  - **ts-node:** Mise à jour vers la `v9` ([#522](https://github.com/assurance-maladie-digital/design-system/pull/522)) ([0b380b6](https://github.com/assurance-maladie-digital/design-system/commit/0b380b67e5c45ed4b2b7d8e0887bee060b8bed79))
  - **jest:** Mise à jour vers la `v26.4.2` ([#523](https://github.com/assurance-maladie-digital/design-system/pull/523)) ([5e8b9af](https://github.com/assurance-maladie-digital/design-system/commit/5e8b9afd2c10230e6dec9ca35eb2ee66db66a941))
  - **vuetify:** Mise à jour vers la `v2.3.10` ([#533](https://github.com/assurance-maladie-digital/design-system/pull/533)) ([0dae038](https://github.com/assurance-maladie-digital/design-system/commit/0dae038b48a2321ad7592464b9204e94e6336aaa))
  - **@vue/eslint-plugin-typescript:** Mise à jour vers la `v5.1.0` ([#536](https://github.com/assurance-maladie-digital/design-system/pull/536)) ([ddb7a59](https://github.com/assurance-maladie-digital/design-system/commit/ddb7a594d08145e15db9bef0bc5d2138ca5691e5))
  - **@vue/test-utils:** Mise à jour vers la `v1.0.5` ([#538](https://github.com/assurance-maladie-digital/design-system/pull/538)) ([e47e85b](https://github.com/assurance-maladie-digital/design-system/commit/e47e85b0fa9d13e0c5ca116dd22532b7b0241eb1))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.1.0` ([#541](https://github.com/assurance-maladie-digital/design-system/pull/541)) ([e33b625](https://github.com/assurance-maladie-digital/design-system/commit/e33b6255f2458a5ff117ebee15318e1986a81a57))
  - **babel:** Mise à jour du monorepo vers la `v7.11.6` ([#543](https://github.com/assurance-maladie-digital/design-system/pull/543)) ([2a3f23d](https://github.com/assurance-maladie-digital/design-system/commit/2a3f23daa67c863edbd00369d14b545017f3dd34))
  - **sass-loader:** Mise à jour vers la `v10.0.2` ([#549](https://github.com/assurance-maladie-digital/design-system/pull/549)) ([ff44f8b](https://github.com/assurance-maladie-digital/design-system/commit/ff44f8b3977a1ad549ad7dfcfd040d34ec8b5f60))
  - **typescript:** Mise à jour vers la `v4` ([#520](https://github.com/assurance-maladie-digital/design-system/pull/520)) ([98b0efe](https://github.com/assurance-maladie-digital/design-system/commit/98b0efe9af1acd168de9863248e0204429325572))
  - **ts-jest:** Mise à jour vers la `v26.3.0` ([#535](https://github.com/assurance-maladie-digital/design-system/pull/535)) ([1133114](https://github.com/assurance-maladie-digital/design-system/commit/11331140717ea8afbda6010b1cfe0960768c8af0))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v4` ([#542](https://github.com/assurance-maladie-digital/design-system/pull/542)) ([18a855e](https://github.com/assurance-maladie-digital/design-system/commit/18a855e905ca6cb7becf47616fbcd309e34d1d95))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.5.1` ([#550](https://github.com/assurance-maladie-digital/design-system/pull/550)) ([add8171](https://github.com/assurance-maladie-digital/design-system/commit/add81710af3ae7b5045fa0995091850e780b5fa6))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.6`, de **@vue/test-utils** vers la `v1.1.0` et de **vue-class-component** vers la `v7.2.6` ([#553](https://github.com/assurance-maladie-digital/design-system/pull/553)) ([8a5beb2](https://github.com/assurance-maladie-digital/design-system/commit/8a5beb2ed5452562dc38ea26159376117498e39d))
  - **lint-staged:** Mise à jour vers la `v10.4.0` ([#555](https://github.com/assurance-maladie-digital/design-system/pull/555)) ([bd2b8de](https://github.com/assurance-maladie-digital/design-system/commit/bd2b8de0bb091fb17430f88c75f3ab60fb30d5a9))
  - **@mdi/js:** Mise à jour vers la `v5.6.55` ([#557](https://github.com/assurance-maladie-digital/design-system/pull/557)) ([37530fa](https://github.com/assurance-maladie-digital/design-system/commit/37530fada2a94ea0785b86bf87a945e2568845bb))
  - **dayjs:** Mise à jour vers la `v1.8.36` ([#558](https://github.com/assurance-maladie-digital/design-system/pull/558)) ([645e63f](https://github.com/assurance-maladie-digital/design-system/commit/645e63f2d22b7eb03457403cf20441b893cf4894))
  - **@types/jest:** Mise à jour vers la `v26.0.14` ([#556](https://github.com/assurance-maladie-digital/design-system/pull/556)) ([01970b7](https://github.com/assurance-maladie-digital/design-system/commit/01970b73f0804bd085965bf54f2b748123cdad8b))
  - **@types/node:** Mise à jour vers la `v12.12.62` ([#561](https://github.com/assurance-maladie-digital/design-system/pull/561)) ([f17a75f](https://github.com/assurance-maladie-digital/design-system/commit/f17a75f9e2fd96ebf284b1ec98473e9a918ca54c))
  - **webpack:** Mise à jour vers la `v4.41.2` ([#562](https://github.com/assurance-maladie-digital/design-system/pull/562)) ([6f94327](https://github.com/assurance-maladie-digital/design-system/commit/6f94327a0332c719f4226c1d7ccbeb8d50331fb8))
  - **sass:** Mise à jour vers la `v1.26.11` ([#563](https://github.com/assurance-maladie-digital/design-system/pull/563)) ([9162c3d](https://github.com/assurance-maladie-digital/design-system/commit/9162c3de94cf3a508a176e7420d562928bd9c78f))
  - **json-to-scss:** Mise à jour vers la `v1.6.2` ([#568](https://github.com/assurance-maladie-digital/design-system/pull/568)) ([641edd9](https://github.com/assurance-maladie-digital/design-system/commit/641edd98e40f04baca945cd5a82397d3fa32bd43))

## v2.0.0-beta.0

**Version publiée le 18/08/2020.**

Cette première version bêta comporte deux nouveaux packages, `@cnamts/design-tokens` et `@cnamts/form-builder`, la mise à jour de Vuetify en version 2.3, du refactoring sur les composants ainsi que l'ajout d'un template pour les Pull Requests et d'un fichier CHANGELOG.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **DatePicker:** Ajout de l'événement `input` ([#457](https://github.com/assurance-maladie-digital/design-system/pull/457)) ([7124804](https://github.com/assurance-maladie-digital/design-system/commit/7124804b432f7446e19170fbaf95aade15c909c0))

- ♻️ **Refactoring**
  - **NotificationBar:** Refonte du composant suite à la mise à jour de Vuetify ([#436](https://github.com/assurance-maladie-digital/design-system/pull/436)) ([9ec5ca3](https://github.com/assurance-maladie-digital/design-system/commit/9ec5ca39d3ac4f15a5fdfac96f5a6845f46c2f5c))
  - **DatePicker:** Utilisation de la syntaxe standard du helper `mixins` ([#449](https://github.com/assurance-maladie-digital/design-system/pull/449)) ([253f51e](https://github.com/assurance-maladie-digital/design-system/commit/253f51e5930e2b07459d96079e0595aa7b4813a0))
  - **Playground:** Correction de la couleur du bouton pour changer de thème ([f06d77c](https://github.com/assurance-maladie-digital/design-system/commit/f06d77c84952490b639bfd910a49532877555ebd))
  - **FileUpload:** Refonte du composant ([#273](https://github.com/assurance-maladie-digital/design-system/pull/273)) ([f75e491](https://github.com/assurance-maladie-digital/design-system/commit/f75e491dc4cffde64c73f655ff5d9ef48cb7c1ae))

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction d'espaces blancs en trop ([#458](https://github.com/assurance-maladie-digital/design-system/pull/458)) ([76eab8a](https://github.com/assurance-maladie-digital/design-system/commit/76eab8a55a3b3fbd6b0ac8eaa86eada8315131d8))

- ♻️ **Refactoring**
  - **template:** Refonte des styles du thème suite à la mise à jour de Vuetify ([#482](https://github.com/assurance-maladie-digital/design-system/pull/482)) ([d5af459](https://github.com/assurance-maladie-digital/design-system/commit/d5af4590c3ca6c64bd652b037629b7a1740ece34))

- 🔥 **Suppressions**
  - **template:** Suppression des styles inutiles suite à la mise à jour de Vuetify ([#460](https://github.com/assurance-maladie-digital/design-system/pull/460)) ([cd41eef](https://github.com/assurance-maladie-digital/design-system/commit/cd41eefc028b4eac87fa217ec94cef708c1e05ed))

- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([#511](https://github.com/assurance-maladie-digital/design-system/pull/511)) ([c120bf1](https://github.com/assurance-maladie-digital/design-system/commit/c120bf1b8474307cfc49c3c354adff14d59ada96))

### FormBuilder

- ✨ **Nouvelles fonctionnalités**
  - **global:** Ajout du package FormBuilder ([#190](https://github.com/assurance-maladie-digital/design-system/pull/190)) ([0e4403e](https://github.com/assurance-maladie-digital/design-system/commit/0e4403e8690d58c2d7925d967c578ff935b8ebc0))

### Design Tokens

- ✨ **Nouvelles fonctionnalités**
  - **global:** Extraction des Design Tokens dans un nouveau package ([#483](https://github.com/assurance-maladie-digital/design-system/pull/483)) ([9399134](https://github.com/assurance-maladie-digital/design-system/commit/9399134e1954e271af9db386f1c836fd93fd7e4c))

- 🐛 **Corrections de bugs**
  - **types:** Correction des types et ajout du fichier `index.ts` manquant ([#494](https://github.com/assurance-maladie-digital/design-system/pull/494)) ([28efd5c](https://github.com/assurance-maladie-digital/design-system/commit/28efd5c3658d6412ae418d9378902fa1e0e8a30e))

### Interne

- 🔒 **Sécurité**
  - **lodash:** Mise à jour vers de la `v4.17.15` vers la `v4.17.19` ([#444](https://github.com/assurance-maladie-digital/design-system/pull/444)) ([3584d6f](https://github.com/assurance-maladie-digital/design-system/commit/3584d6fa8caf80fca4aba4a883be6be191342368))

- ♻️ **Refactoring**
  - **peerDependencies:** Mise à jour des dépendances ([#508](https://github.com/assurance-maladie-digital/design-system/pull/508)) ([de12946](https://github.com/assurance-maladie-digital/design-system/commit/de1294632dcc0540ee517ae6f5819a98e93cabe0))
  - **dependencies:** Déplacement des dépendances communes vers la racine ([#509](https://github.com/assurance-maladie-digital/design-system/pull/509)) ([bc40e59](https://github.com/assurance-maladie-digital/design-system/commit/bc40e59ec9a983194bd6cc89b0850852d5b23c68))

- 🔥 **Suppressions**
  - **dependencies:** Suppression de la dépendance non-utilisée `webpack-node-externals` ([#437](https://github.com/assurance-maladie-digital/design-system/pull/437)) ([035a0dd](https://github.com/assurance-maladie-digital/design-system/commit/035a0ddf3a64467797de579133f880a3d4636990))

- 📝 **Documentation**
  - **CHANGELOG:** Ajout d'un fichier CHANGELOG ([#456](https://github.com/assurance-maladie-digital/design-system/pull/456)) ([5541e18s](https://github.com/assurance-maladie-digital/design-system/commit/5541e18784a5d4884bc174b96eefc5d25bad5979))
  - **pull-requests:** Ajout d'un template pour les Pull Requests ([#464](https://github.com/assurance-maladie-digital/design-system/pull/464)) ([6206290](https://github.com/assurance-maladie-digital/design-system/commit/620629039da9256fe0b6c842eb89f830732f7974))
  - **README:** Ajout du package Design Tokens à la section écosystème ([043c1d5](https://github.com/assurance-maladie-digital/design-system/commit/043c1d55b8c56d950df7e15e00aeb70c036cd47f))
  - **README:** Ajout du package FormBuilder à la section écosystème ([c71beca](https://github.com/assurance-maladie-digital/design-system/commit/c71becae7bfa990c70992e695fe0bd0e52dec170))
  - **CHANGELOG:** Mise à jour du fichier CHANGELOG ([#513](https://github.com/assurance-maladie-digital/design-system/pull/513)) ([5962865](https://github.com/assurance-maladie-digital/design-system/commit/596286522cfbf6439fec0efe895fa4965beed4bf))

- 🔧 **Configuration**
  - **config:** Mise à jour de la taille maximale du build ([4335c4a](https://github.com/assurance-maladie-digital/design-system/commit/4335c4ab8dcff5840df967f5d22852309a9dde17))

- ⬆️ **Dépendances**
  - **vuetify-loader:** Mise à jour vers la `v1.6.0` ([#434](https://github.com/assurance-maladie-digital/design-system/pull/434)) ([4831a70](https://github.com/assurance-maladie-digital/design-system/commit/4831a70accf2cc604d06d3d74123ce6b4a9dcb4c))
  - **typescript:** Mise à jour vers la `v3.9.7` ([#443](https://github.com/assurance-maladie-digital/design-system/pull/443)) ([cdf483b](https://github.com/assurance-maladie-digital/design-system/commit/cdf483bc0b9fc8efa988efa956ed814940a57d2d))
  - **vue-class-component:** Mise à jour vers la `v7.2.5` ([#453](https://github.com/assurance-maladie-digital/design-system/pull/453)) ([334160f](https://github.com/assurance-maladie-digital/design-system/commit/334160f749f00f055593a774d8df1f615dcccaa7))
  - **vuetify:** Mise à jour vers la `v2.3` ([#374](https://github.com/assurance-maladie-digital/design-system/pull/374)) ([c335b4a](https://github.com/assurance-maladie-digital/design-system/commit/c335b4a5fa9b6777c30bf4d6e90fcaaa28b92296))
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.7` ([#448](https://github.com/assurance-maladie-digital/design-system/pull/448)) ([6e7ec58](https://github.com/assurance-maladie-digital/design-system/commit/6e7ec58c59028bd850f8546ce57612ee8ca9142e))
  - **vue-input-facade:** Mise à jour vers la `v1.3.2` ([#473](https://github.com/assurance-maladie-digital/design-system/pull/473)) ([829bc7b](https://github.com/assurance-maladie-digital/design-system/commit/829bc7b14ea57b469a2b9160c1eb4e9c57c2c69f))
  - **babel:** Mise à jour du monorepo vers la `v7.11.0` ([#476](https://github.com/assurance-maladie-digital/design-system/pull/476)) ([0bf9e21](https://github.com/assurance-maladie-digital/design-system/commit/0bf9e21dea0a9b66193a4c2dea99b11571c6c718))
  - **@babel/core:** Mise à jour vers la `v7.11.1` ([#487](https://github.com/assurance-maladie-digital/design-system/pull/487)) ([60f6325](https://github.com/assurance-maladie-digital/design-system/commit/60f6325ca9a2ec7b94def3b4483135c014704fd2))
  - **webpack:** Mise à jour vers la `v4.41.1` ([#461](https://github.com/assurance-maladie-digital/design-system/pull/461)) ([9c4ca26](https://github.com/assurance-maladie-digital/design-system/commit/9c4ca26d2baaeeecc85fa82dea92c79e37fb0f75))
  - **sass-loader:** Mise à jour vers la `v9.0.3` ([#490](https://github.com/assurance-maladie-digital/design-system/pull/490)) ([f498cc1](https://github.com/assurance-maladie-digital/design-system/commit/f498cc111fef8018e00a1cd37a1f2f09a597e618))
  - **@types/node:** Mise à jour vers la `v12.12.54` ([#492](https://github.com/assurance-maladie-digital/design-system/pull/492)) ([bcf8310](https://github.com/assurance-maladie-digital/design-system/commit/bcf831001723dd2e7b2d80825943269dee42641f))
  - **vuetify:** Mise à jour vers la `v2.3.8` ([#495](https://github.com/assurance-maladie-digital/design-system/pull/495)) ([859c200](https://github.com/assurance-maladie-digital/design-system/commit/859c200babe1d5bf4a2a433ddeaa4807575c62b1))
  - **vue-router:** Mise à jour vers la `v3.4.2` ([#496](https://github.com/assurance-maladie-digital/design-system/pull/496)) ([53b8d27](https://github.com/assurance-maladie-digital/design-system/commit/53b8d272c69174e6219cf24840dd3740634ad2bb))
  - **dayjs:** Mise à jour vers la `v1.8.33` ([#497](https://github.com/assurance-maladie-digital/design-system/pull/497)) ([f3ec80a](https://github.com/assurance-maladie-digital/design-system/commit/f3ec80a8676586e9fd22d96b2b7f9b9ba6aa4c32))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.5.3` et de **vue-router** vers la `v3.4.3` ([#398](https://github.com/assurance-maladie-digital/design-system/pull/398)) ([7ad77b6](https://github.com/assurance-maladie-digital/design-system/commit/7ad77b6709b8671fa54133d973a4c3234c1ab754))
  - **jest:** Mise à jour vers la `v26.4.0` ([#499](https://github.com/assurance-maladie-digital/design-system/pull/499)) ([5ec3db1](https://github.com/assurance-maladie-digital/design-system/commit/5ec3db178442b42bdf5a32b27d5163e13ea5952f))
  - **@mdi/js:** Mise à jour vers la `v5.5.55` ([#500](https://github.com/assurance-maladie-digital/design-system/pull/500)) ([1843597](https://github.com/assurance-maladie-digital/design-system/commit/184359742ceacd2362e24cb675613cf0850d9dff))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.9.0` ([#501](https://github.com/assurance-maladie-digital/design-system/pull/501)) ([a456afc](https://github.com/assurance-maladie-digital/design-system/commit/a456afcad310b4328bf1091bef6e92729f7991aa))
  - **ts-jest:** Mise à jour vers la `v26.2.0` ([#502](https://github.com/assurance-maladie-digital/design-system/pull/502)) ([9b8495c](https://github.com/assurance-maladie-digital/design-system/commit/9b8495c3393a9f863409d4a3f1f94e1849cfc921))
  - **@types/jest:** Mise à jour vers la `v26.0.10` ([#505](https://github.com/assurance-maladie-digital/design-system/pull/505)) ([c7be0f5](https://github.com/assurance-maladie-digital/design-system/commit/c7be0f526c259f05f70932356dfec18580b42e18))
  - **@vue/test-utils:** Mise à jour vers la `v1.0.4` ([#507](https://github.com/assurance-maladie-digital/design-system/pull/507)) ([b43fb05](https://github.com/assurance-maladie-digital/design-system/commit/b43fb0581b3a2b962c7b191a7a6cf121460b004b))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v30.2.4` ([#510](https://github.com/assurance-maladie-digital/design-system/pull/510)) ([9061af7](https://github.com/assurance-maladie-digital/design-system/commit/9061af7c88d3feae5f24c34d67da54cfd4102d12))

### 📚 Guide de migration

#### Mise à jour de Vuetify

Vuetify a été mis à jour à la version LTS `2.3`, vous pouvez suivre le [guide de migration de Vuetify 2.3](https://github.com/vuetifyjs/vuetify/releases/tag/v2.3.0#user-content-upgrade-guide) pour la mise à jour.

#### Mise à jour des autres dépendances

Nous avons mis à jour les dépendances requises pour Vue Dot, il faut mettre à jour les dépendances suivantes si ce n'est pas déjà fait :
- **@mdi/js**: `^5.0.0`
- **vue**: `^2.6.11`
- **vuetify**: `^2.3.0`
- **vuex**: `^3.5.0`

#### Design Tokens

Si vous utilisez les Design Tokens initialement présents dans Vue Dot, vous devez installer le nouveau package `@cnamts/design-tokens` :

```sh
yarn add @cnamts/design-tokens
```

Puis importer ceux-ci depuis le package :

```diff
-import tokens from '@cnamts/vue-dot/src/tokens;
+import { tokens } from '@cnamts/design-tokens;
```

De même, la constante `vuetifyTheme` a changé d'emplacement et est maintenant appelée `lightTheme` :

```diff
-import { vuetifyTheme } from '@cnamts/vue-dot/src/tokens/vuetifyTheme';
+import { lightTheme } from '@cnamts/design-tokens/src/colors';
```

#### Styles du thème

Suite à la mise à jour de Vuetify, les styles par défaut du thème ont été mis à jour dans Vue Dash, et leur taille a été réduite d'environ 60 lignes.

Vous pouvez retrouver le détail de ces changements et mettre à jour ces styles dans vos projets en suivant les modifications des Pull Requests [#460](https://github.com/assurance-maladie-digital/design-system/pull/460) et [#482](https://github.com/assurance-maladie-digital/design-system/pull/482).

## v2.0.0-alpha.53

**Version publiée le 10/07/2020.**

Cette version comporte de nouvelles fonctionnalités ainsi que des correctifs sur les composants `UploadWorkflow`, `FileList` et `FileUpload`. Elle inclut également des correctifs d'accessibilité et du refactoring en vue du passage en version bêta.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileList/UploadWorkflow:** Ajout d'un bouton d'upload sur chaque ligne ([#408](https://github.com/assurance-maladie-digital/design-system/pull/408)) ([6ef29aa](https://github.com/assurance-maladie-digital/design-system/commit/6ef29aabfce3e6c4b5c5b1f04fdab6313a83fa65))
  - **FileList:** Ajout des fichiers optionnels ([#420](https://github.com/assurance-maladie-digital/design-system/pull/420)) ([7de86a4](https://github.com/assurance-maladie-digital/design-system/commit/7de86a4e3c8289136d30a4542adc83f4f4266dfd))
  - **mixins:** Ajout de la mixin `widthable` ([#424](https://github.com/assurance-maladie-digital/design-system/pull/424)) ([8070012](https://github.com/assurance-maladie-digital/design-system/commit/807001276b75aad7700b63422b4bea49fb6e689b))
  - **helpers:** Ajout du helper `convertToUnit` ([#424](https://github.com/assurance-maladie-digital/design-system/pull/424)) ([8070012](https://github.com/assurance-maladie-digital/design-system/commit/807001276b75aad7700b63422b4bea49fb6e689b))

- 🐛 **Corrections de bugs**
  - **UploadWorkflow:** Correction d'une erreur de validation sur les fichiers avec une extension en majuscules ([#407](https://github.com/assurance-maladie-digital/design-system/pull/407)) ([70a6684](https://github.com/assurance-maladie-digital/design-system/commit/70a668482a1618ed75aa18eaa58d797b5e97dbc9))
  - **UploadWorkflow:** Correction de l'affichage de la fenêtre de sélection lors d'une erreur ([#409](https://github.com/assurance-maladie-digital/design-system/pull/409)) ([669c79d](https://github.com/assurance-maladie-digital/design-system/commit/669c79da8370798f060111b7fe8ab870590e7ae2))
  - **FileList:** Correction du titre du fichier qui ne retourne pas à la ligne ([#411](https://github.com/assurance-maladie-digital/design-system/pull/411)) ([c417ffb](https://github.com/assurance-maladie-digital/design-system/commit/c417ffbcdf6375ef817a5a3a21cd9bfe73010840))
  - **DatePicker:** Correction de la largeur du sélecteur d'année sur IE 11 ([#421](https://github.com/assurance-maladie-digital/design-system/pull/421)) ([7bd3b06](https://github.com/assurance-maladie-digital/design-system/commit/7bd3b0635bbc642f0272e355da03c5c418d56b64))
  - **rules:** Correction des conditions dans les règles `maxLength` et `minLength` ([#432](https://github.com/assurance-maladie-digital/design-system/pull/432)) ([7bd3b06](https://github.com/assurance-maladie-digital/design-system/commit/7bd3b0635bbc642f0272e355da03c5c418d56b64))

- ♿️ **Accessibilité**
  - **DatePicker/FileList:** Ajout des `aria-label` manquants ([#427](https://github.com/assurance-maladie-digital/design-system/pull/427)) ([f069e35](https://github.com/assurance-maladie-digital/design-system/commit/f069e35376d002182fcbd9ff7de7c7de3297471c))
  - **playground:** Correction du label dans l'exemple `debounce` ([#428](https://github.com/assurance-maladie-digital/design-system/pull/428)) ([fafee4e](https://github.com/assurance-maladie-digital/design-system/commit/fafee4e596f6404546179af407c36d72e2e5e78c))

- ♻️ **Refactoring**
  - **UploadWorkflow:** Extraction des fonctionnalités en mixins ([#342](https://github.com/assurance-maladie-digital/design-system/pull/342)) ([479e56b](https://github.com/assurance-maladie-digital/design-system/commit/479e56bfca55f3e56f5e8b3da51913d610237d1a))
  - **playground:** Utilisation de la classe `vd-form-input` dans les exemples ([#425](https://github.com/assurance-maladie-digital/design-system/pull/425)) ([0c7927a](https://github.com/assurance-maladie-digital/design-system/commit/0c7927a651eff5f139178256dc5e3ea5b497ce03))
  - **LocalStorageUtility:** Mise à jour de la détection de fonctionnalité de `localStorage` ([#426](https://github.com/assurance-maladie-digital/design-system/pull/426)) ([2ab0821](https://github.com/assurance-maladie-digital/design-system/commit/2ab0821b52b826a44617f9628e8cdd616cd1092a))
  - **DialogBox:** Ajout du suffixe `Btn` dans les locales ([#429](https://github.com/assurance-maladie-digital/design-system/pull/429)) ([6cee959](https://github.com/assurance-maladie-digital/design-system/commit/6cee959b0049a34c9130e392a4e0840c2528817c))
  - **DatePicker:** Déplacement des tests des mixins dans un dossier dédié ([#430](https://github.com/assurance-maladie-digital/design-system/pull/430)) ([41e4645](https://github.com/assurance-maladie-digital/design-system/commit/41e46453c24dfbb61ff7888c0d048f73bb52850a))
  - **global:** Mise à jour de l'utilisation de `deepMerge` et utilisation de `any` dans le type `Options` ([#430](https://github.com/assurance-maladie-digital/design-system/pull/430)) ([41e4645](https://github.com/assurance-maladie-digital/design-system/commit/41e46453c24dfbb61ff7888c0d048f73bb52850a))
  - **FileUpload:** Mise à jour de la taille maximale d'un fichier à 10MB par défaut ([#433](https://github.com/assurance-maladie-digital/design-system/pull/433)) ([ac28846](https://github.com/assurance-maladie-digital/design-system/commit/ac288468dd2a3771cd5f903325857fd13aaedfb0))

- 🔥 **Suppressions**
  - **PageCard:** Suppression de la prop `no-shadow` ([#412](https://github.com/assurance-maladie-digital/design-system/pull/412)) ([a91cdcd](https://github.com/assurance-maladie-digital/design-system/commit/a91cdcd24ebbe409883b99c6ed545e16eab26b98))

- ✅ **Tests**
  - **global:** Utilisation de `toBeUndefined()` à la place de `toBe(undefined)` ([#410](https://github.com/assurance-maladie-digital/design-system/pull/410)) ([02d84e2](https://github.com/assurance-maladie-digital/design-system/commit/02d84e242cd6d42377e4cf540da3d73a20ad46a8))

### Vue Dash
- ⬆️ **Dépendances**
  - **template:** Mise à jour des dépendances ([3cf35fd](https://github.com/assurance-maladie-digital/design-system/commit/3cf35fd42355cf32a8a415bf2a9509a7df426de8))

### Interne
- ⬆️ **Dépendances**
  - **vue-cli-plugin-vuetify:** Mise à jour vers la `v2.0.6` ([#394](https://github.com/assurance-maladie-digital/design-system/pull/394)) ([3fa3d8f](https://github.com/assurance-maladie-digital/design-system/commit/3fa3d8fd14978602f62887f9baccd26bd1a0382d))
  - **babel:** Mise à jour du monorepo vers la `v7.10.4` ([#399](https://github.com/assurance-maladie-digital/design-system/pull/399)) ([62e2e8b](https://github.com/assurance-maladie-digital/design-system/commit/62e2e8bfb2d4137d3b292357e45dc811599d160b))
  - **copy-webpack-plugin:** Mise à jour vers la `v6.0.3` ([#400](https://github.com/assurance-maladie-digital/design-system/pull/400)) ([61767db](https://github.com/assurance-maladie-digital/design-system/commit/61767db500527c254ab855237df2e89cfa8478ca))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v28.6.1` ([#401](https://github.com/assurance-maladie-digital/design-system/pull/401)) ([25b8def](https://github.com/assurance-maladie-digital/design-system/commit/25b8def6d1c6004c60935160e50fb63cba819998))
  - **typescript:** Mise à jour vers la `v3.9.6` ([#401](https://github.com/assurance-maladie-digital/design-system/pull/401)) ([25b8def](https://github.com/assurance-maladie-digital/design-system/commit/25b8def6d1c6004c60935160e50fb63cba819998))
  - **dayjs:** Mise à jour vers la `v1.8.29` ([#404](https://github.com/assurance-maladie-digital/design-system/pull/404)) ([27bfc33](https://github.com/assurance-maladie-digital/design-system/commit/27bfc33b4fd59279f62a98cb6ad73c1fd10a365e))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.6.0` ([#413](https://github.com/assurance-maladie-digital/design-system/pull/413)) ([9e3c419](https://github.com/assurance-maladie-digital/design-system/commit/9e3c419d86c2071aff840ebaeb61aa6aa099e4ea))
  - **@types/jest:** Mise à jour vers la `v26.0.4` ([#414](https://github.com/assurance-maladie-digital/design-system/pull/414)) ([49ca48a](https://github.com/assurance-maladie-digital/design-system/commit/49ca48a1bdd73f1a361c4c94a236f9047383bd0c))
  - **sass:** Mise à jour vers la `v1.26.10` ([#416](https://github.com/assurance-maladie-digital/design-system/pull/416)) ([b97b0e9](https://github.com/assurance-maladie-digital/design-system/commit/b97b0e9c9f6dd0f153a3018957564a449bf0419d))
  - **sass-loader:** Mise à jour vers la `v9` ([#403](https://github.com/assurance-maladie-digital/design-system/pull/403)) ([736f26f](https://github.com/assurance-maladie-digital/design-system/commit/736f26ff76ce37f21d9946aad077ad479348a3dc))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v29.1.3` ([#423](https://github.com/assurance-maladie-digital/design-system/pull/423)) ([d9120c8](https://github.com/assurance-maladie-digital/design-system/commit/d9120c868a4c0ff0f98f7edd603e009b9723c2fe))

### 📚 Guide de migration

#### Largeur des composants `FileUpload` et `UploadWorkflow`

Ces composants ont maintenant une largeur par défaut de `100%`, vous pouvez utiliser la prop `width` pour définir une largeur :

```diff
<FileUpload
+	width="512"
/>
```

#### Suppression de l'ombre sur `PageCard`

La prop `no-shadow` a été supprimée car elle ne fonctionnait pas correctement. Pour retirer l'ombre, vous pouvez utiliser la même méthode que sur une `VCard` :

```diff
<PageCard
-	no-shadow
+	:elevation="0"
/>
```

## v2.0.0-alpha.52

**Version publiée le 01/07/2020.**

Cette version comporte un changement de dépendance important, ainsi que des nouvelles fonctionnalités diverses comme les classes de largeur de champs de formulaires, mais aussi des correctifs sur le `FileUpload` et du refactoring en vue du passage en version bêta.

### Vue Dot

- 💥 **Changements majeurs**
  - **dependencies:** Remplacement de `vue-the-mask` par `vue-input-facade` ([#363](https://github.com/assurance-maladie-digital/design-system/pull/363)) ([c17ad2b](https://github.com/assurance-maladie-digital/design-system/commit/c17ad2bcb951afb7f5adc37bab8b6c0b440e6016))

- ✨ **Nouvelles fonctionnalités**
  - **SubHeader:** Ajout d'un défilement horizontal lorsque le contenu déborde ([a940ce7](https://github.com/assurance-maladie-digital/design-system/commit/a940ce7c3217fabf160364a40c009fbe7d3e2729))
  - **DataList:** Ajout de la prop `render-html-value` ([#348](https://github.com/assurance-maladie-digital/design-system/pull/348)) ([7b0cc23](https://github.com/assurance-maladie-digital/design-system/commit/7b0cc2330c5d82e1f27598c3b79aeba8fa649bd9))
  - **directives:** Ajout du helper `registerDirectives` ([#351](https://github.com/assurance-maladie-digital/design-system/pull/351)) ([dc9577f](https://github.com/assurance-maladie-digital/design-system/commit/dc9577fdd020f284d44d8f245f6a82f8fff7a871))
  - **DatePicker:** Ajout de la prop `outlined` ([#355](https://github.com/assurance-maladie-digital/design-system/pull/355)) ([714ee7a](https://github.com/assurance-maladie-digital/design-system/commit/714ee7ad8189d55be502611bc2d3f99d92a6511f))
  - **helpers:** Ajout de la fonction `deepRemoveKeys` ([#360](https://github.com/assurance-maladie-digital/design-system/pull/360)) ([d1e5cb0](https://github.com/assurance-maladie-digital/design-system/commit/d1e5cb0e780e0a8c1e0b1e7bb4623eb1d55139ba))
  - **tokens:** Ajout des tokens et classes `input-width` ([#381](https://github.com/assurance-maladie-digital/design-system/pull/381)) ([8e7fce3](https://github.com/assurance-maladie-digital/design-system/commit/8e7fce338692ec122085f72b9c3d73c66db9d84b)) ([#397](https://github.com/assurance-maladie-digital/design-system/pull/397)) ([d4d75ce](https://github.com/assurance-maladie-digital/design-system/commit/d4d75cec94e4cab2285e6ca6faee5a58b16bb8a9))

- 🐛 **Corrections de bugs**
  - **SubHeader:** Correction de la prop `title` utilisée à la place de `listTitle` ([#323](https://github.com/assurance-maladie-digital/design-system/pull/323)) ([0c56297](https://github.com/assurance-maladie-digital/design-system/commit/0c562971a3f3ead0562afca58efb90c52000ef4a))
  - **DataList:** Correction du mode `row` ne fonctionnant pas ([#299](https://github.com/assurance-maladie-digital/design-system/pull/299)) ([bfcda8e](https://github.com/assurance-maladie-digital/design-system/commit/bfcda8e55037f906b5e73ada65914c609f69742d))
  - **FileUpload :** Correction des styles de focus ([#364](https://github.com/assurance-maladie-digital/design-system/pull/364)) ([53733cb](https://github.com/assurance-maladie-digital/design-system/commit/53733cbb8be76d99a0409958fb6153816558a749))
  - **LocalStorageUtility:** Correction d'erreurs lorsque `localStorage` n'est pas supporté ([#375](https://github.com/assurance-maladie-digital/design-system/pull/375)) ([42ff78c](https://github.com/assurance-maladie-digital/design-system/commit/42ff78cc745dfaad068b6862e759bf4c0957c05c))
  - **FileUpload:** Correction du type de la valeur et ajout d'une fonction de validation sur celle-ci ([#380](https://github.com/assurance-maladie-digital/design-system/pull/380)) ([494b226](https://github.com/assurance-maladie-digital/design-system/commit/494b2268b9c79e3c91e90823818bc62fa4706b72))

- ♻️ **Refactoring**
  - **SubHeader:** Modification de la prop `title-text` pour qu'elle soit optionnelle ([860b849](https://github.com/assurance-maladie-digital/design-system/commit/860b849dc8c0f531049353f26e97187e6590d82e))
  - **eventable:** Renommage de la prop `showWeekEnds` en `showWeekends` ([#354](https://github.com/assurance-maladie-digital/design-system/pull/354)) ([180f506](https://github.com/assurance-maladie-digital/design-system/commit/180f506e232e444244d7b4c0cc732ff7c4cee41d))
  - **FileList:** Renommage de la prop `hide-list-divider` en `hide-last-divider` ([#378](https://github.com/assurance-maladie-digital/design-system/pull/378)) ([3483de9](https://github.com/assurance-maladie-digital/design-system/commit/3483de931040693bd97b75f14b957bd316e4f6f8))
  - **DatePicker:** Mise à jour du binding de la prop `success-messages` ([#382](https://github.com/assurance-maladie-digital/design-system/pull/382)) ([a0ea9d9](https://github.com/assurance-maladie-digital/design-system/commit/a0ea9d9805a05118b27ece6f1bdd601f131919ab))

- 🔥 **Suppressions**
  - **package:** Suppression d'artefacts de build non nécessaires ([ee012c5](https://github.com/assurance-maladie-digital/design-system/commit/ee012c5fbbdcd75960e6e363939902a6ff2c92a6))
  - **PaginatedTable:** Suppression de la prop non utilisée `serverItemsLength` ([#370](https://github.com/assurance-maladie-digital/design-system/pull/370)) ([a4244c8](https://github.com/assurance-maladie-digital/design-system/commit/a4244c8f3dca5b77af080150c8aa657c14a0efaa))

- ✅ **Tests**
  - **SubHeader:** Ajout d'un test sur l'état de chargement ([#325](https://github.com/assurance-maladie-digital/design-system/pull/325)) ([c8bd939](https://github.com/assurance-maladie-digital/design-system/commit/c8bd93934b85f8c3e68f2b5c7d2096a955a0b2f4))
  - **DataList:** Suppression d'un ancien test ([29e1e96](https://github.com/assurance-maladie-digital/design-system/commit/29e1e961963562b31090ea1163b386a353a36b12))

### Vue Dash

- 🔥 **Suppressions**
  - **template:** Suppression des imports non utilisés dans le template ([e89b0c0](https://github.com/assurance-maladie-digital/design-system/commit/e89b0c099077dbae493886a48d4d830b5516419c))

### Interne

- 🔧 **Configuration**
  - **config:** Ajout de `preserveSymlinks` au fichier `tsconfig.json` ([#383](https://github.com/assurance-maladie-digital/design-system/pull/383)) ([488b4e3](https://github.com/assurance-maladie-digital/design-system/commit/488b4e3919d579f246cc2c728d4e0a9394c7d95f))

- ⬆️ **Dépendances**
  - **copy-webpack-plugin:** Mise à jour vers la `v6.0.2` ([#327](https://github.com/assurance-maladie-digital/design-system/pull/327)) ([3b1a17e](https://github.com/assurance-maladie-digital/design-system/commit/3b1a17e4032ff1438613b1765e280a57845e0776))
  - **fs-extra:** Mise à jour vers la `v9.0.1` ([#329](https://github.com/assurance-maladie-digital/design-system/pull/329)) ([c23385f](https://github.com/assurance-maladie-digital/design-system/commit/c23385fffbd2fe49f1d7efb3486bcb2f9ad0b0f0))
  - **lerna:** Mise à jour vers la `v3.22.1` ([#347](https://github.com/assurance-maladie-digital/design-system/pull/347)) ([eee41c3](https://github.com/assurance-maladie-digital/design-system/commit/eee41c331e3a0e6b81e8600c887478137d170d12))
  - **@types/node:** Mise à jour vers la `v12.12.47` ([#350](https://github.com/assurance-maladie-digital/design-system/pull/350)) ([3a86faa](https://github.com/assurance-maladie-digital/design-system/commit/3a86faa7710e7261c8376d7a0b766ac603aa8e3c))
  - **vuetify:** Mise à jour vers la `v2.2.34` ([#352](https://github.com/assurance-maladie-digital/design-system/pull/352)) ([b5836eb](https://github.com/assurance-maladie-digital/design-system/commit/b5836eb43f4188de0297d9ea11d4e9c648e27c66))
  - **vuetify-loader:** Mise à jour vers la `v1.5.0` ([#358](https://github.com/assurance-maladie-digital/design-system/pull/358)) ([a375ec2](https://github.com/assurance-maladie-digital/design-system/commit/a375ec2239b32307549c56b5c39ca8f59cf8fd63))
  - **vue-router:** Mise à jour vers la `v3.3.4` ([#365](https://github.com/assurance-maladie-digital/design-system/pull/365)) ([29dcdb7](https://github.com/assurance-maladie-digital/design-system/commit/29dcdb7132714c3da4bab3acf8f2b9378a55d79e))
  - **vue-input-facade:** Mise à jour vers la `1.3.1` ([#369](https://github.com/assurance-maladie-digital/design-system/pull/369)) ([d55b2c0](https://github.com/assurance-maladie-digital/design-system/commit/d55b2c0dff1cb6fbeccc0af9f39e6aed7ff25eb2))
  - **lint-staged:** Mise à jour vers la `v10.2.11` ([#373](https://github.com/assurance-maladie-digital/design-system/pull/373)) ([cdf8ccf](https://github.com/assurance-maladie-digital/design-system/commit/cdf8ccf5180ff05bf3cd9d812cf0298b3640139a))
  - **ts-jest:** Mise à jour vers la `v26.1.1` ([#387](https://github.com/assurance-maladie-digital/design-system/pull/387)) ([eee4fb0](https://github.com/assurance-maladie-digital/design-system/commit/eee4fb08e3b523d19b49b315a2f5d733d50bea21))
  - **babel:** Mise à jour du monorepo vers la `v7.10.3` ([#384](https://github.com/assurance-maladie-digital/design-system/pull/384)) ([1b42117](https://github.com/assurance-maladie-digital/design-system/commit/1b42117e4d65fa13b9ef92aa98b92d26bf400aa8))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.5.0` ([#390](https://github.com/assurance-maladie-digital/design-system/pull/390)) ([d1b81af](https://github.com/assurance-maladie-digital/design-system/commit/d1b81af89a385cb413521beea06a05b16e3153f5))
  - **sass:** Mise à jour vers la `v1.26.9` ([#391](https://github.com/assurance-maladie-digital/design-system/pull/391)) ([066cc8a](https://github.com/assurance-maladie-digital/design-system/commit/066cc8ab0a39bc52a7ba01a6efa8a803b2b1561b))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v28.5.1` ([#392](https://github.com/assurance-maladie-digital/design-system/pull/392)) ([e5ed339](https://github.com/assurance-maladie-digital/design-system/commit/e5ed339027ce191b28d69385e4760ca9a7e2359c))
  - **jest:** Mise à jour vers la `v26.1.0` ([#393](https://github.com/assurance-maladie-digital/design-system/pull/393)) ([8a6f178](https://github.com/assurance-maladie-digital/design-system/commit/8a6f178c1c7219cfa8bd708a629fd4243a7e49e2))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.4.6` et de **vuex** vers la `v3.5.1` ([#395](https://github.com/assurance-maladie-digital/design-system/pull/395)) ([4e6ad36](https://github.com/assurance-maladie-digital/design-system/commit/4e6ad3645815e28153e5e441a3b7d5e8e646ad78))
  - **@types/jest:** Mise à jour vers la `v26.0.3` ([#396](https://github.com/assurance-maladie-digital/design-system/pull/396)) ([c8a72ed](https://github.com/assurance-maladie-digital/design-system/commit/c8a72ed16af5f14611aaf72376f1e137a63c81b1))

### 📚 Guide de migration

#### Remplacer `vue-the-mask`

Au moment de la sortie de cette version, [Vue the mask](https://github.com/vuejs-tips/vue-the-mask) n'a pas été mis à jour depuis deux ans (voir [#137](https://github.com/vuejs-tips/vue-the-mask/issues/137)), nous avons donc décidé de le remplacer par [Vue input facade](https://github.com/RonaldJerez/vue-input-facade), un fork mis à jour plus régulièrement.

Pour mettre à jour, vous devez supprimer `vue-the-mask` du fichier `package.json`, en utilisant la commande `yarn remove vue-the-mask`, et installer `vue-input-facade` en utilisant `yarn add vue-input-facade`.

Après avoir installé le nouveau package, vous devez mettre à jour la déclaration du module :

```diff
// src/modules.d.ts
-declare module 'vue-the-mask';
+declare module 'vue-input-facade';
```

Et aussi mettre à jour l'utilisation du plugin :

```diff
// src/plugins/vue-dot.ts
-// Register v-mask directive
-import VueTheMask from 'vue-the-mask';
-Vue.use(VueTheMask);
+// Register v-facade directive
+import InputFacade from 'vue-input-facade';
+Vue.use(InputFacade);
```

Il est également nécessaire d'ajouter `vue-input-facade` à la liste des dépendances qui doivent être transpilées pour assurer la comptabilité des navigateurs comme IE 11 :

```diff
// vue.config.js
// Transpile ES6 inside dependencies
transpileDependencies: [
	/node_modules[/\\\\]vuetify[/\\\\]/,
	'vuex-persist',
+	'vue-input-facade'
]
```

Pour la compatibilité des navigateurs comme IE 11, vous devez également ajouter le polyfill `custom-event-polyfill` en utilisant `yarn add custom-event-polyfill`, puis l'importer dans votre application :

```diff
// main.ts
+// Polyfill for vue-input-facade on IE
+// (not included in core-js)
+import 'custom-event-polyfill';
]
```

Si vous n'utilisez pas directement la directive `v-mask`, c'est tout ce que vous avez à faire !

Si vous l'utilisez, vous devez rechercher et remplacer `v-mask` par `v-facade`. Vous pouvez configurer `vue-input-facade` pour utiliser la directive `v-mask` (voir [Migrating existing projects](https://github.com/RonaldJerez/vue-input-facade#migrating-existing-projects)), mais nous vous conseillons de la renommer maintenant pour éviter de créer de la dette technique.

#### Renommer `showWeekEnds` sur le `DatePicker`

La prop `showWeekEnds` a été renommée en `showWeekends` :

```diff
<DatePicker
-	showWeekEnds
+	showWeekends
/>
```

#### Utiliser la nouvelle prop `outlined` sur le `DatePicker`

Lorsque vous utilisez la prop `outlined` sur le `DatePicker`, le `VMenu` sera maintenant positionné au bon endroit et la prop `append-icon` sera activée automatiquement :

```diff
<DatePicker
-	:vuetify-options="{
-		menu: {
-			nudgeBottom: 56,
-			nudgeRight: 0
-		}
-	}"
	outlined
-	append-icon
/>
```

#### Utiliser les nouvelles classes pour les champs de formulaires

Nous avons ajouté de nouveaux Design Tokens et de nouvelles classes pour ajuster la largeur des champs de formulaires, vous pouvez rechercher et remplacer les anciennes classes `form-input` par `vd-form-input` :

```diff
<VTextField
-	class="form-input"
+	class="vd-form-input"
/>
```

Et vous pouvez utiliser les nouveaux suffixes `xl`, `l`, `s` :

```html
<VTextField class="vd-form-input-xl" />
```

Vous pouvez également supprimer les anciennes classes de votre thème :

```diff
// src/theme/styles/utility.scss
-.form-input {
-	width: 328px;
-	flex: none;
-}
```

## v2.0.0-alpha.51

**Version publiée le 02/06/2020.**

Cette version comporte plusieurs mois de refactoring de la librairie et de son écosystème, c'est la première version d'une série en vue du passage en version bêta.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **functions:** Ajout de la fonction `formatNir` ([#108](https://github.com/assurance-maladie-digital/design-system/pull/108)) ([5d19a26](https://github.com/assurance-maladie-digital/design-system/commit/5d19a2611bcc43967a4d0d49f93766fad861fd4c))
  - **rules:** Ajout de la règle de validation `exactLength` ([#203](https://github.com/assurance-maladie-digital/design-system/pull/203)) ([3eb5798](https://github.com/assurance-maladie-digital/design-system/commit/3eb5798b2bd4531683758577d9bd40a78fee3ba5))
  - **helpers:** Ajout du helper `scrollBehavior` ([#210](https://github.com/assurance-maladie-digital/design-system/pull/210)) ([e3bcc56](https://github.com/assurance-maladie-digital/design-system/commit/e3bcc56f19f8032792f930b7646e7db62bb81843))
  - **DataList:** Ajout d'un bouton d'action ([#211](https://github.com/assurance-maladie-digital/design-system/pull/211)) ([635e5a1](https://github.com/assurance-maladie-digital/design-system/commit/635e5a123888f7b82b87a9ada3a59ecab0d0d9af))
  - **FooterWrapper/FooterBtn:** Ajout de nouveaux composants ([#253](https://github.com/assurance-maladie-digital/design-system/pull/253)) ([da1f9bb](https://github.com/assurance-maladie-digital/design-system/commit/da1f9bbb194f3e3aa1aabe19fb7c550ed1a5b93b))
  - **DialogBox:** Ajout d'un nouveau composant ([#238](https://github.com/assurance-maladie-digital/design-system/pull/238)) ([088c2db](https://github.com/assurance-maladie-digital/design-system/commit/088c2dbe64ca0dc74d96ccda8686c5bf5052f8db))
  - **DialogBox:** Ajout des propriétés `btnCancelText` et `confirmBtnText` ([#280](https://github.com/assurance-maladie-digital/design-system/pull/280)) ([6467582](https://github.com/assurance-maladie-digital/design-system/commit/64675828c2abac76df349122d32ae11965e2b6e9))

- 🐛 **Corrections de bugs**
  - **CopyBtn:** Correction du nom du composant ([de5c0b5](https://github.com/assurance-maladie-digital/design-system/commit/de5c0b523883e9ea29aa4ade8800be60135d4ed5))
  - **DataList:** Ajout d'un binding d'option manquant ([#240](https://github.com/assurance-maladie-digital/design-system/pull/240)) ([79e983d](https://github.com/assurance-maladie-digital/design-system/commit/79e983dd5565e7bbec8f6fcf23c8bbca5cd3a294))
  - **SubHeader:** Correction des styles ([#289](https://github.com/assurance-maladie-digital/design-system/pull/289)) ([8c389f7](https://github.com/assurance-maladie-digital/design-system/commit/8c389f7634fddd061e3caf1bc4aa59ad832f7fe6))
  - **FooterWrapper:** Correction des styles sur les écrans mobiles ([#288](https://github.com/assurance-maladie-digital/design-system/pull/288)) ([15603a1](https://github.com/assurance-maladie-digital/design-system/commit/15603a142f24a92a11251cd26859fb8bf176fdb7))
  - **DatePicker:** Correction de l'affichage de `Invalid Date` lorsque le mauvais format est utilisé ([#306](https://github.com/assurance-maladie-digital/design-system/pull/306)) ([394c17d](https://github.com/assurance-maladie-digital/design-system/commit/394c17db7d788d751bd692b66730d4aa4f822d45))

- ♻️ **Refactoring**
  - **debounce:** Refonte de la directive ([#144](https://github.com/assurance-maladie-digital/design-system/pull/144)) ([aa21507](https://github.com/assurance-maladie-digital/design-system/commit/aa21507b675d931b68a000e8be1996d088571ed4))
  - **CopyBtn:** Refonte du composant ([#146](https://github.com/assurance-maladie-digital/design-system/pull/146)) ([7bc0199](https://github.com/assurance-maladie-digital/design-system/commit/7bc019949244b6083e85e77dcf8a99192487ef1e))
  - **rules:** Refonte des règles de validation ([#147](https://github.com/assurance-maladie-digital/design-system/pull/147)) ([68ff5da](https://github.com/assurance-maladie-digital/design-system/commit/68ff5da882a4cc5cbb84b2f9e9f73fa2337c5f26))
  - **CopyBtn:** Mise à jour de l'API du composant ([#147](https://github.com/assurance-maladie-digital/design-system/pull/147)) ([68ff5da](https://github.com/assurance-maladie-digital/design-system/commit/68ff5da882a4cc5cbb84b2f9e9f73fa2337c5f26))
  - **components:** Inversion des propriétés booléennes avec `true` comme valeur par défaut ([#154](https://github.com/assurance-maladie-digital/design-system/pull/154)) ([7eb25e3](https://github.com/assurance-maladie-digital/design-system/commit/7eb25e343821c6b00591878a589cd675ddc80ec3))
  - **DataList:** Refonte du composant ([#155](https://github.com/assurance-maladie-digital/design-system/pull/155)) ([ec8f28d](https://github.com/assurance-maladie-digital/design-system/commit/ec8f28d255932216573da019f6bc793fb7af3145))
  - **HeaderLoading:** Refonte du composant ([#167](https://github.com/assurance-maladie-digital/design-system/pull/167)) ([d052b4e](https://github.com/assurance-maladie-digital/design-system/commit/d052b4e2b1308985a29acaec36ce521a4e21894d))
  - **DataList:** Mise à jour de l'ordre des props ([fbbdc4f](https://github.com/assurance-maladie-digital/design-system/commit/fbbdc4f5ac6ab0c926aeb635a8e2cdfaeb01b546))
  - **DataListLoading:** Refonte du composant ([#194](https://github.com/assurance-maladie-digital/design-system/pull/194)) ([c2c84c9](https://github.com/assurance-maladie-digital/design-system/commit/c2c84c90af0dc507611146072e05e4db63f4de69))
  - **DataList:** Renommage de la prop `list` en `items` ([#227](https://github.com/assurance-maladie-digital/design-system/pull/227)) ([e6cc88b](https://github.com/assurance-maladie-digital/design-system/commit/e6cc88ba12ad498c62243eaa195020b42b4c36df))
  - **DataList:** Renommage de la prop `width` en `item-width` ([#239](https://github.com/assurance-maladie-digital/design-system/pull/239)) ([1721dff](https://github.com/assurance-maladie-digital/design-system/commit/1721dff160d707a540dfa1dafd2a4a491b0a2ac2))
  - **DataList:** Utilisation de l'interface `DataOptions` de Vuetify ([#241](https://github.com/assurance-maladie-digital/design-system/pull/241)) ([31a06ce](https://github.com/assurance-maladie-digital/design-system/commit/31a06ce3f1ba6b7988e6ef8022336778195593c7))
  - **DataListItem:** Déplacement des options dans le fichier `config.ts` ([#275](https://github.com/assurance-maladie-digital/design-system/pull/275)) ([3729fb5](https://github.com/assurance-maladie-digital/design-system/commit/3729fb5e613bb50bb38bdd1382c8c26b46f80f9a))
  - **UploadWorkflow:** Utilisation de `DialogBox` ([#279](https://github.com/assurance-maladie-digital/design-system/pull/279)) ([9346570](https://github.com/assurance-maladie-digital/design-system/commit/93465701222a0c98abd958ecccfde7d6bf2fe632))
  - **DatePicker:** Utilisation du helper `mixins` ([#305](https://github.com/assurance-maladie-digital/design-system/pull/305)) ([d0e5d88](https://github.com/assurance-maladie-digital/design-system/commit/d0e5d880f585e52e51329c56401cf9d6437b7a7c))
  - **DatePicker:** Ajout du type `date` sur le `VTextField` et correction de l'alignement des icônes ([#307](https://github.com/assurance-maladie-digital/design-system/pull/307)) ([021f2b0](https://github.com/assurance-maladie-digital/design-system/commit/021f2b0db54f7108ee49f799b49d630ff0446518))
  - **playground:** Mise à jour des exemples `DatePickerEx` et `RulesEx` ([90a5fdb](https://github.com/assurance-maladie-digital/design-system/commit/90a5fdb59542e589d63c02dd80f269777c688c58))

- ⚡️ **Performances**
  - **webpack:** Ajout du champ `module` pour activer le tree-shaking ([b0859d6](https://github.com/assurance-maladie-digital/design-system/commit/b0859d6913172032d145abb888c95a3a4cb7abbc))

- 🏗 **Architecture**
  - **PageCard:** Déplacement du composant dans le dossier `elements` ([#258](https://github.com/assurance-maladie-digital/design-system/pull/258)) ([cbf5e57](https://github.com/assurance-maladie-digital/design-system/commit/cbf5e57c29489d3475d1234d690d72c14076ca9f))
  - **FileList:** Déplacement du composant comme enfant de `UploadWorkflow` ([#278](https://github.com/assurance-maladie-digital/design-system/pull/278)) ([8de9d66](https://github.com/assurance-maladie-digital/design-system/commit/8de9d66ab21c349c87033fe76361bd39d1d20e44))
  - **tests:** Déplacement de la fonction `html` dans le dossier `tests/utils` ([#309](https://github.com/assurance-maladie-digital/design-system/pull/309)) ([3f8e803](https://github.com/assurance-maladie-digital/design-system/commit/3f8e80381cd1682b95764da8880e40ee4521f8b9))

- ✅ **Tests**
  - **global:** Correction de fautes d'orthographe ([#169](https://github.com/assurance-maladie-digital/design-system/pull/169)) ([620bdb2](https://github.com/assurance-maladie-digital/design-system/commit/620bdb22721170eb45eff55c9b2d07d9f8001b89))
  - **utils:** Ajout de la fonction `addVApp` ([#308](https://github.com/assurance-maladie-digital/design-system/pull/308)) ([5ce63f7](https://github.com/assurance-maladie-digital/design-system/commit/5ce63f7328206ed02549044557b75627868ed33f))
  - **index:** Déplacement de la déclaration de `vue-the-mask` dans le fichier `tests/index.ts` ([#310](https://github.com/assurance-maladie-digital/design-system/pull/310)) ([d604c32](https://github.com/assurance-maladie-digital/design-system/commit/d604c3255edb0a5dcf99ded3eef90434e91e5a4a))

- 🔥 **Suppressions**
  - **Playground:** Suppression d'un ancien exemple dans `CopyBtnEx` ([b5cfc30](https://github.com/assurance-maladie-digital/design-system/commit/b5cfc303c3f5ec934766676915c60b91f0fbfea2))
  - **types:** Suppression d'un import inutile dans le fichier `src/index.ts` ([fed0b04](https://github.com/assurance-maladie-digital/design-system/commit/fed0b04d1ea6f02c4099074145620880e1de6180))
  - **DialogBox:** Suppression de l'import des Design Tokens ([#319](https://github.com/assurance-maladie-digital/design-system/pull/319)) ([2d0c1fc](https://github.com/assurance-maladie-digital/design-system/commit/2d0c1fc122bccc3a1242dbf078c77ea6b29e2d4b))

- 🚨 **Lint**
  - **playground:** Correction d'erreurs sur les types de retours ([be74c93](https://github.com/assurance-maladie-digital/design-system/commit/be74c93cd0d936c2d00c76674e22f6a14d00ed4b))

- 📝 **Documentation**
  - **package.json:** Mise à jour de la description ([ebfb0fa](https://github.com/assurance-maladie-digital/design-system/commit/ebfb0fa9357086ec4e0c92952b1dfdf0ce0325db))
  - **README:** Suppression de l'option `global` dans les instructions d'installation ([cfd9e49](https://github.com/assurance-maladie-digital/design-system/commit/cfd9e49692399f27ad627b4b5040c7334f950ac8))
  - **README:** Mise à jour de la section écosystème ([#274](https://github.com/assurance-maladie-digital/design-system/pull/274)) ([1e6def1](https://github.com/assurance-maladie-digital/design-system/commit/1e6def1cbde81db2d10541c9209f67ff4e307e68))

- 🔧 **Configuration**
  - **lint:** Suppression de TSLint et mise à jour de la configuration d'ESLint ([#281](https://github.com/assurance-maladie-digital/design-system/pull/281)) ([1e6def1](https://github.com/assurance-maladie-digital/design-system/commit/1e6def1cbde81db2d10541c9209f67ff4e307e68))

### Vue Dash

- ✨ **Nouvelles fonctionnalités**
  - **prompts:** Ajout de l'option Matomo ([#175](https://github.com/assurance-maladie-digital/design-system/pull/175)) ([a8bb95b](https://github.com/assurance-maladie-digital/design-system/commit/a8bb95b7c5a2bbf41df6cee1ed0a74c039b40aea))

- 🐛 **Corrections de bugs**
  - **template:** Correction de la configuration du router ([#179](https://github.com/assurance-maladie-digital/design-system/pull/179)) ([1c89a67](https://github.com/assurance-maladie-digital/design-system/commit/1c89a673b894f2b76c62ba33e7796539e106fdae))
  - **template:** Correction de la mauvaise version de Vue Dot utilisée ([#188](https://github.com/assurance-maladie-digital/design-system/pull/188)) ([fec3a39](https://github.com/assurance-maladie-digital/design-system/commit/fec3a3993b9add67d716aed2936bdaaadb1b3289))
  - **template:** Épinglage de la de Vue Dot en versions alpha et bêta ([#259](https://github.com/assurance-maladie-digital/design-system/pull/259)) ([8330d80](https://github.com/assurance-maladie-digital/design-system/commit/8330d806a53b9c1128aaafa0ec7d232c4fa191a5))

- ♻️ **Refactoring**
  - **template:** Mise à jour du template ([#111](https://github.com/assurance-maladie-digital/design-system/pull/111)) ([7088316](https://github.com/assurance-maladie-digital/design-system/commit/7088316c095cd7e58f19d0ee3d2915ae6ba595a2))
  - **template:** Utilisation de la fonction `html` de Vue Dot ([52bdafc](https://github.com/assurance-maladie-digital/design-system/commit/52bdafc997420c6dead34b1e9dce2ab54ac63c96))
  - **template:** Mise à jour des styles du thème ([#189](https://github.com/assurance-maladie-digital/design-system/pull/189)) ([99f62fd](https://github.com/assurance-maladie-digital/design-system/commit/99f62fd2ceee9855813174279f4d38d44d556cfc))
  - **template:** Utilisation du helper `scrollBehavior` de Vue Dot ([#210](https://github.com/assurance-maladie-digital/design-system/pull/210)) ([e3bcc56](https://github.com/assurance-maladie-digital/design-system/commit/e3bcc56f19f8032792f930b7646e7db62bb81843))
  - **prompts:** Traduction des prompts en français ([#226](https://github.com/assurance-maladie-digital/design-system/pull/226)) ([f440a93](https://github.com/assurance-maladie-digital/design-system/commit/f440a93530f3d86985e378eb95c64815fa441e9b))
  - **template:** Utilisation des composants de Footer de Vue Dot ([#254](https://github.com/assurance-maladie-digital/design-system/pull/254)) ([238fcb6](https://github.com/assurance-maladie-digital/design-system/commit/238fcb6f7fd916b2f402875b32e21faa8e08714f))

- 🔧 **Configuration**
  - **lint:** Mise à jour de la configuration d'ESLint ([#317](https://github.com/assurance-maladie-digital/design-system/pull/317)) ([a538ac1](https://github.com/assurance-maladie-digital/design-system/commit/a538ac1c2e83d176522ab4f868fcbfcf3c7407d6))
  - **tests:** Mise à jour de la configuration des tests unitaires ([#318](https://github.com/assurance-maladie-digital/design-system/pull/318)) ([ba5f861](https://github.com/assurance-maladie-digital/design-system/commit/ba5f86141cceb2c3c4a09f8b19b242c131b87560))

- ⬆️ **Dépendances**
  - **jest:** Mise à jour vers la `v25` ([#182](https://github.com/assurance-maladie-digital/design-system/pull/182)) ([3a42d8e](https://github.com/assurance-maladie-digital/design-system/commit/3a42d8e7246278f8810db3d433e9c94b23fe0cf8))
  - **jest:** Mise à jour vers la `v25` et mise à jour de la configuration ([#185](https://github.com/assurance-maladie-digital/design-system/pull/185)) ([6c407fc](https://github.com/assurance-maladie-digital/design-system/commit/6c407fca6cbeb173372b5a6fb78b4fb9411f675e))
  - **template:** Mise à jour des dépendances ([#316](https://github.com/assurance-maladie-digital/design-system/pull/316)) ([c307f71](https://github.com/assurance-maladie-digital/design-system/commit/c307f718069c9a3ef2883de669e4a426d314b8d7))

### Interne

- ✨ **Nouvelles fonctionnalités**
  - **ci:** Ajout de renovate ([#112](https://github.com/assurance-maladie-digital/design-system/pull/112)) ([ca39dfa](https://github.com/assurance-maladie-digital/design-system/commit/ca39dfadb82add9e039588bd6d3d7bb76285e6d2))

- 🔥 **Suppressions**
  - **dependencies:** Suppression de la dépendance `monorepo-run` ([#196](https://github.com/assurance-maladie-digital/design-system/pull/196)) ([90aa1df](https://github.com/assurance-maladie-digital/design-system/commit/90aa1df8e97527dcbb4b3d8a88a1e1e8e7754f30))

- 🔧 **Configuration**
  - **config:** Mise à jour de la configuration de Travis CI ([#187](https://github.com/assurance-maladie-digital/design-system/pull/187)) ([7ede478](https://github.com/assurance-maladie-digital/design-system/commit/7ede478631394800aaa0ef675cbf0024ba160059))
  - **config:** Mise à jour de la taille maximale du build ([bad20e7](https://github.com/assurance-maladie-digital/design-system/commit/bad20e76aa1d6bd8c6108db8c246eeabd64215b1))

- ⬆️ **Dépendances**
  - **global:** Épinglage des dépendances ([#113](https://github.com/assurance-maladie-digital/design-system/pull/113)) ([d1cbcc6](https://github.com/assurance-maladie-digital/design-system/commit/d1cbcc617b6500299c024ad8a2f605e2fae79f5e))
  - **vue-class-component:** Mise à jour vers la `7.2.3` ([#114](https://github.com/assurance-maladie-digital/design-system/pull/114)) ([d0e0964](https://github.com/assurance-maladie-digital/design-system/commit/d0e0964b6fffc718957526238d78f9e103ae4530))
  - **global:** Mise à jour des dépendances ([#136](https://github.com/assurance-maladie-digital/design-system/pull/136)) ([8cfe357](https://github.com/assurance-maladie-digital/design-system/commit/8cfe3576e1172b2c843c07664c01c312a96ba48c))
  - **typescript:** Mise à jour vers la `v3.8.3` ([#124](https://github.com/assurance-maladie-digital/design-system/pull/124)) ([e85a707](https://github.com/assurance-maladie-digital/design-system/commit/e85a707c062ffcf32dc68c0692ccce986faa6195))
  - **global:** Mise à jour des dépendances ([0fed9a3](https://github.com/assurance-maladie-digital/design-system/commit/0fed9a3761c7f5c27932d67090df2f82e08c5748))
  - **@mdi/js:** Mise à jour de la `peerDependency` vers la `v5.1.45` ([#152](https://github.com/assurance-maladie-digital/design-system/pull/152)) ([e48721c](https://github.com/assurance-maladie-digital/design-system/commit/e48721c6b0cdf5dfa4d164a284888e54265b5d08))
  - **global:** Mise à jour des dépendances ([95e4a3c](https://github.com/assurance-maladie-digital/design-system/commit/95e4a3c6693a1bbd1f8b3ee2a0219489b5525422))
  - **jest:** Mise à jour vers la `v25.5.4` ([#168](https://github.com/assurance-maladie-digital/design-system/pull/168)) ([4b5e570](https://github.com/assurance-maladie-digital/design-system/commit/4b5e5707e8eb9e65d7d3b58ea4d4b5b307af0c45)) ([#197](https://github.com/assurance-maladie-digital/design-system/pull/197)) ([8bf3202](https://github.com/assurance-maladie-digital/design-system/commit/8bf3202bbc71b915c2c238ca973258614f57c68a))
  - **jest-mock-process:** Mise à jour vers la `v1.4.0` ([#204](https://github.com/assurance-maladie-digital/design-system/pull/204)) ([42b14d1](https://github.com/assurance-maladie-digital/design-system/commit/42b14d13a4d20d2fb7fe8d833f534c2c3e2cbc0a))
  - **vue-router:** Épinglage de la dépendance à la `v3.1.6` ([#212](https://github.com/assurance-maladie-digital/design-system/pull/212)) ([2f9fe54](https://github.com/assurance-maladie-digital/design-system/commit/2f9fe5422c0cd9a7b77e6e705f9d0ad1400101d2))
  - **vuex:** Mise à jour vers la `3.4.0` ([#216](https://github.com/assurance-maladie-digital/design-system/pull/216)) ([3537d27](https://github.com/assurance-maladie-digital/design-system/commit/3537d278d8d48035da9237b104fe19f7ff1532b9))
  - **ts-jest:** Mise à jour vers la `v25.5.1` ([#215](https://github.com/assurance-maladie-digital/design-system/pull/215)) ([98ab101](https://github.com/assurance-maladie-digital/design-system/commit/98ab10128f39cff9f5ee45d719df4f0312d93076))
  - **copy-webpack-plugin:** Mise à jour vers la `v6` ([#242](https://github.com/assurance-maladie-digital/design-system/pull/242)) ([ce00075](https://github.com/assurance-maladie-digital/design-system/commit/ce00075acb69f4291c264d944ffddebea2e97a81))
  - **@vue/test-utils:** Mise à jour vers la `v1.0.3` ([#246](https://github.com/assurance-maladie-digital/design-system/pull/246)) ([51b3cd3](https://github.com/assurance-maladie-digital/design-system/commit/51b3cd37c8865a1b17383c19bf9d7274131bd616))
  - **@types/jest:** Mise à jour vers la `v25.2.3` ([#257](https://github.com/assurance-maladie-digital/design-system/pull/257)) ([f0a3c53](https://github.com/assurance-maladie-digital/design-system/commit/f0a3c5390044a8c7550e16058739dfbf48c188a2))
  - **@types/fs-extra:** Mise à jour vers la `v9.0.1` ([#263](https://github.com/assurance-maladie-digital/design-system/pull/263)) ([c7d5a83](https://github.com/assurance-maladie-digital/design-system/commit/c7d5a83003376a2b07cc30132cc89621be10a2e0))
  - **@mdi/js:** Mise à jour vers la `v5.3.45` ([#276](https://github.com/assurance-maladie-digital/design-system/pull/276)) ([76135cf](https://github.com/assurance-maladie-digital/design-system/commit/76135cfc25c5441d13b2bb7a8d3f12354a8450ff))
  - **lerna:** Mise à jour vers la `v3.22.0` ([#277](https://github.com/assurance-maladie-digital/design-system/pull/277)) ([4b52c12](https://github.com/assurance-maladie-digital/design-system/commit/4b52c12ebc681d5b9632fad4fdee128a53e9008c))
  - **vue-loader:** Mise à jour vers la `v1.4.4` ([#287](https://github.com/assurance-maladie-digital/design-system/pull/287)) ([096c1e6](https://github.com/assurance-maladie-digital/design-system/commit/096c1e6babdc6eaef7d159025c47bcb7ff90deea))
  - **vuetify:** Mise à jour vers la `v2.2.30` ([#291](https://github.com/assurance-maladie-digital/design-system/pull/291)) ([fe2ddc1](https://github.com/assurance-maladie-digital/design-system/commit/fe2ddc1019e27fd2be181afcc9ef4c60d8a74289))
  - **@vue/cli:** Mise à jour du monorepo vers la `v4.4.1` ([#292](https://github.com/assurance-maladie-digital/design-system/pull/292)) ([920ec3f](https://github.com/assurance-maladie-digital/design-system/commit/920ec3fcd0118c1c2f1ccac96b1af5be71f8fcea))
  - **dayjs:** Mise à jour vers la `v1.8.28` ([#297](https://github.com/assurance-maladie-digital/design-system/pull/297)) ([72029c6](https://github.com/assurance-maladie-digital/design-system/commit/72029c61ac3a219caee15d4b5c23c36e5216ed47))
  - **ts-node:** Mise à jour vers la `v8.10.2` ([#301](https://github.com/assurance-maladie-digital/design-system/pull/301)) ([1ca7bf3](https://github.com/assurance-maladie-digital/design-system/commit/1ca7bf351d8bc168356b51154269386ae4158895))
  - **sass:** Mise à jour vers la `v1.26.7` ([#302](https://github.com/assurance-maladie-digital/design-system/pull/302)) ([4199f85](https://github.com/assurance-maladie-digital/design-system/commit/4199f851d9194d5b1682151ad3a0c0b7dc7d0748))
  - **lint-staged:** Mise à jour vers la `v10.2.7` ([#303](https://github.com/assurance-maladie-digital/design-system/pull/303)) ([4c4f797](https://github.com/assurance-maladie-digital/design-system/commit/4c4f79768348b5323019786a3e6e3a2960f9c572))
  - **vue-router:** Mise à jour vers la `3.3.2` ([#304](https://github.com/assurance-maladie-digital/design-system/pull/304)) ([6f33ddd](https://github.com/assurance-maladie-digital/design-system/commit/6f33dddf007f814ac16e57329102bda4c53cd945))
  - **babel:** Mise à jour du monorepo vers la `v7.10.2` ([#311](https://github.com/assurance-maladie-digital/design-system/pull/311)) ([8c00f6f](https://github.com/assurance-maladie-digital/design-system/commit/8c00f6f9be137e82648cfe748f2f62bb5deade93))
  - **eslint-plugin-jsdoc:** Mise à jour vers la `v26.0.2` ([#312](https://github.com/assurance-maladie-digital/design-system/pull/312)) ([3cdf57b](https://github.com/assurance-maladie-digital/design-system/commit/3cdf57b8399b335652bcc3d0c7cd6b2b00c61660))
  - **typescript-eslint:** Mise à jour du monorepo vers la `v3.1.0` ([#313](https://github.com/assurance-maladie-digital/design-system/pull/313)) ([9106805](https://github.com/assurance-maladie-digital/design-system/commit/9106805f104ae391f59183038f67419bcf4c98cf))
  - **@types/node:** Mise à jour vers la `v12.12.43` ([#314](https://github.com/assurance-maladie-digital/design-system/pull/314)) ([217069f](https://github.com/assurance-maladie-digital/design-system/commit/217069f36d1be7bca37ddab93d64605cbc0c6f29))

## v2.0.0-alpha.50

**Version publiée le 06/03/2020.**

Cette version comporte deux correctifs sur le `DatePicker` ainsi qu'une simplification de son utilisation.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **DatePicker:** Correction de l'alignement des icônes ([23a4724](https://github.com/assurance-maladie-digital/design-system/commit/23a472485afba66c04067676e5c87c26560e2026))
  - **DatePicker:** Modification de la date minimale en mode `birthdate` de `1950` à `1900` ([31e4950](https://github.com/assurance-maladie-digital/design-system/commit/31e49508a6496ad7989891cb20b0675affddca45))

- ♻️ **Refactoring**
  - **DatePicker:** Simplification de l'API ([#107](https://github.com/assurance-maladie-digital/design-system/pull/107)) ([f48bb5e](https://github.com/assurance-maladie-digital/design-system/commit/f48bb5e2fb628952cd161353d786b44ea1b66732))

### 📚 Guide de migration

#### Simplification de l'utilisation du DatePicker

Les propriétés passées au composant `DatePicker` sont maintenant passées directement au composant `VTextField` à l'intérieur. Il n'est plus nécessaire de passer par la prop `vuetify-options`, vous pouvez donc simplifier votre code :

```diff
<DatePicker
-	:vuetify-options="{
-		textField: {
-			clearable: true
-		}
-	}"
+	clearable
/>
```

## v2.0.0-alpha.49

**Version publiée le 24/02/2020.**

Cette version comporte un correctif sur les imports dans le template de Vue Dash.

### Vue Dash

- 🐛 **Corrections de bugs**
  - **template:** Correction des imports ([#100](https://github.com/assurance-maladie-digital/design-system/pull/100)) ([44a5d92](https://github.com/assurance-maladie-digital/design-system/commit/44a5d9264e7a13320436f0675ea31de5063bcf82))

## v2.0.0-alpha.19

**Version publiée le 09/07/2019.**

Cette version comporte des nouvelles fonctionnalités et des correctifs sur le composant `FileUpload`.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileUpload:** Ajout de la prop `disabled` ([8f26d1d](https://github.com/assurance-maladie-digital/design-system/commit/8f26d1dd7e51449bb5437bda7339fc920c593405))
  - **FileUpload:** Ajout de la prop `input-ref` ([f8919b8](https://github.com/assurance-maladie-digital/design-system/commit/f8919b8ac41b35935855dd5d0323d2cd98405d87))

- 🐛 **Corrections de bugs**
  - **FileUpload:** Correction de l'affichage du label ([9f09904](https://github.com/assurance-maladie-digital/design-system/commit/9f09904ac88284f4ebb3ded819ea8c69ccf3def4))
  - **FileUpload:** Correction du type du `v-model` ([7b95858](https://github.com/assurance-maladie-digital/design-system/commit/7b95858baaeebd4589abacef1ce8f9b023c7b0b3))
  - **FileUpload:** Correction de l'événement `change` émis lorsqu'il n'y a pas de fichier sélectionné ([63ae3f5](https://github.com/assurance-maladie-digital/design-system/commit/63ae3f50aabfadadf6d6afdf2de46543a2fb3e21))

- ♻️ **Refactoring**
  - **FileUpload:** Modification de l'interface de l'événement `error` ([e1248cb](https://github.com/assurance-maladie-digital/design-system/commit/e1248cb9a4088ea530c5a9546af9e0b1cf20686f))

## v2.0.0-alpha.18

**Version publiée le 08/07/2019.**

Cette version comporte une mise à jour de l'exemple du `FileUpload` dans le playground.

### Vue Dot

- ♻️ **Refactoring**
  - **playground:** Mise à jour de l'exemple du `FileUpload` ([87c26a8](https://github.com/assurance-maladie-digital/design-system/commit/87c26a8a4dcccb293e2a1194a8470f67930411e9))

## v2.0.0-alpha.17

**Version publiée le 08/07/2019.**

Cette version comporte l'ajout du composant `FileUpload` ainsi qu'un correctif graphique dans le playground.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **FileUpload:** Ajout d'un nouveau composant ([f500464](https://github.com/assurance-maladie-digital/design-system/commit/f50046433ca73e8590244adfdd358900289e6ead))

- 🐛 **Corrections de bugs**
  - **playground:** Correction de la hauteur et la page et d'une typo ([5dc67af](https://github.com/assurance-maladie-digital/design-system/commit/5dc67afe5f37ad5fe061f9b73284af4df92af3e1))

- ♻️ **Refactoring**
  - **global:** Utilisation de la syntaxe raccourcie pour `v-slot` ([91d1cf4](https://github.com/assurance-maladie-digital/design-system/commit/91d1cf4daf560556b69dad0eefeb91dfbbc548f5))
  - **FileUpload:** Calcul dynamique des extensions affichées ([7e0d1e2](https://github.com/assurance-maladie-digital/design-system/commit/7e0d1e21f918e1c8f3023973a7b5f7cbb71a3201))
  - **FileUpload:** Modification des interfaces des événements ([11682a0](https://github.com/assurance-maladie-digital/design-system/commit/11682a0e9bf199ea483429525c1dad1ea4fad73e))

### 📚 Guide de migration

#### Valeurs des événements

La valeur de l'événement `change` est maintenant un tableau de fichiers en mode `multiple`.

La valeur de l'événement `error` est maintenant un objet contenant le code de l'erreur ainsi que le fichier en erreur :

```ts
{
	file: File;
	error: ErrorCodes;
}
```

## v2.0.0-alpha.16

**Version publiée le 26/06/2019.**

Cette version comporte un correctif sur le titre de la `DataList`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **DataList:** Correction du titre affiché même vide ([72b38b4](https://github.com/assurance-maladie-digital/design-system/commit/72b38b40e462c58b825558d94e7688deda5b9e60))

## v2.0.0-alpha.15

**Version publiée le 26/06/2019.**

Cette version comporte la mise à jour de Vuetify.

### Vue Dot

- ⬆️ **Dépendances**
  - **vuetify:** Mise à jour vers la `v1.5.16` ([7a42151](https://github.com/assurance-maladie-digital/design-system/commit/7a42151b7762c9549817c81f8243c77d4438ee62))

## v2.0.0-alpha.14

**Version publiée le 26/06/2019.**

Cette version comporte une nouvelle prop ainsi qu'un correctif sur la validation du `DatePicker`.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **DatePicker:** Ajout de la prop `append-icon` ([abe1836](https://github.com/assurance-maladie-digital/design-system/commit/abe1836ae04460d936541bda87dd654b8777d967))

- 🐛 **Corrections de bugs**
  - **DatePicker:** Correction des `warning-rules` qui ne fonctionnent pas ([2554388](https://github.com/assurance-maladie-digital/design-system/commit/2554388e05c8808e4fa51fe3b423ad144b03acc1))

## v2.0.0-alpha.13

**Version publiée le 25/06/2019.**

Cette version comporte une refonte du template de Vue Dash.

### Vue Dash

- ♻️ **Refactoring**
  - **template:** Mise à jour du template ([d268888](https://github.com/assurance-maladie-digital/design-system/commit/d268888fb77178153002b1162756d1585265b74c))

### 📚 Guide de migration

#### Mise à jour des projets

Le template de Vue Dash a subi une refonte, certaines dépendances comme Sentry ont été supprimées, d'autres mises à jour. La structure du dossier `public` a également été modifiée et il est maintenant recommandé d'écrire vos composants un utilisant la [syntaxe de classes](https://class-component.vuejs.org/).

Vous pouvez retrouver le détail de ces changements et mettre à jour vos projets en suivant les modifications du commit ([d268888](https://github.com/assurance-maladie-digital/design-system/commit/d268888fb77178153002b1162756d1585265b74c)).

## v2.0.0-alpha.12

**Version publiée le 21/06/2019.**

Cette version comporte un correctif sur la publication du package `@cnamts/cli-helpers`.

### CLI Helpers

- 🐛 **Corrections de bugs**
  - **build:** Correction de fichiers non listés dans les fichiers à publier ([d18f672](https://github.com/assurance-maladie-digital/design-system/commit/d18f67266eefc49cd0b973eb25a466b0c1c8efec))

## v2.0.0-alpha.11

**Version publiée le 19/06/2019.**

Cette version comporte un correctif sur la publication du package `@cnamts/cli-helpers`.

### CLI Helpers

- 🐛 **Corrections de bugs**
  - **global:** Correction de la mauvaise publication du package `@cnamts/cli-helpers` ([ccfacc0](https://github.com/assurance-maladie-digital/design-system/commit/ccfacc05a9e977bc2f5d8d1dfbb57ffac496f59d))

## v2.0.0-alpha.10

**Version publiée le 19/06/2019.**

Cette version comporte une modification interne sur les dépendances.

### Interne

- ⬆️ **Dépendances**
  - **global:** Déplacement de `ts-node` dans les dépendances globales ([5c11d8d](https://github.com/assurance-maladie-digital/design-system/commit/5c11d8dac7067a8b5d5311ee1bbfbdd0aee59a00))

## v2.0.0-alpha.9

**Version publiée le 19/06/2019.**

Cette version comporte des modifications internes sur les scripts de build et les dépendances.

### CLI Helpers

- 🔧 **Configuration**
  - **build:** Ajout d'un script de build ([d1f6bb7](https://github.com/assurance-maladie-digital/design-system/commit/d1f6bb7578a9251a79312b342de3bdd8534e33e5))

### Interne

- ⬆️ **Dépendances**
  - **global:** Déplacement de `fs-extra` dans les dépendances globales ([2ca246b](https://github.com/assurance-maladie-digital/design-system/commit/2ca246b2081ede76bf168edc3f85c28d10d446b8))

## v2.0.0-alpha.8

**Version publiée le 19/06/2019.**

Cette version comporte un correctif de dépendance pour Vue Dash et des modifications de configurations internes.

### Vue Dash

- 🐛 **Corrections de bugs**
  - **dependencies:** Correction de la dépendance `@cnamts/cli-helpers` manquante ([0b9939d](https://github.com/assurance-maladie-digital/design-system/commit/0b9939d57dc48b8b018fd2f535656a0a52de89d9))

### Interne

- 🔧 **Configuration**
  - **config:** Mise à jour de la configuration de Lerna ([f05d735](https://github.com/assurance-maladie-digital/design-system/commit/f05d735be9b01718e145d32e50fd46ea4259c04d))
  - **config:** Mise à jour dees références git ([f1da6e1](https://github.com/assurance-maladie-digital/design-system/commit/f1da6e1791bcc8c0ddbbe17ee9f9275f99140cb5))

## v2.0.0-alpha.7

**Version publiée le 14/06/2019.**

Cette version comporte l'ajout du composant `CopyBtn` ainsi que l'utilisation de la nouvelle directive `v-slot` de Vue.js.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **CopyBtn:** Ajout d'un nouveau composant ([e8c363b](https://github.com/assurance-maladie-digital/design-system/commit/e8c363b3f8cd94e91fef1933dbe346c744adcbdd))

- ♻️ **Refactoring**
  - **global:** Utilisation de la nouvelle directive `v-slot` de Vue.js ([80ab593](https://github.com/assurance-maladie-digital/design-system/commit/80ab593847f2a24c0c7452cbc5392cfb63fbcbd4))

- 🔧 **Configuration**
  - **build:** Mise à jour du script de build ([c8a7d2f](https://github.com/assurance-maladie-digital/design-system/commit/c8a7d2f5edff68fbe005e0f3f7f461c618326cb4))
  - **lerna:** Mise à jour de la version dans le fichier `lerna.json` ([d48e012](https://github.com/assurance-maladie-digital/design-system/commit/d48e012736a2ab1035d9d66baa98bdae76d9a5cf))

- ⬆️ **Dépendances**
  - **global:** Mise à jour des dépendances ([14845ba](https://github.com/assurance-maladie-digital/design-system/commit/14845badcdf1b4326255d81650dd9a350556da99))

## v2.0.0-alpha.6

**Version publiée le 06/06/2019.**

Cette version comporte un correctif sur la règle de validation `isDateValid`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **rules:** Correction de la règle de validation `isDateValid` lorsque la valeur est vide ([257b2fd](https://github.com/assurance-maladie-digital/design-system/commit/257b2fdf435488b37c9b3b06ca92c1ba18b03b4a))

## v2.0.0-alpha.5

**Version publiée le 06/06/2019.**

Cette version comporte un correctif sur le typage des règles de validation.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **rules:** Correction du typage des règles de validation ([34f6685](https://github.com/assurance-maladie-digital/design-system/commit/34f668554bc6ed9ec4663d352b28e9a6a2c9a07b))

## v2.0.0-alpha.4

**Version publiée le 05/06/2019.**

Cette version comporte la nouvelle règle de validation `minLength` ainsi qu'une mise à jour des règles existantes.

### Vue Dot

- ✨ **Nouvelles fonctionnalités**
  - **rules:** Ajout de la règle de validation `minLength` ([647f1e5](https://github.com/assurance-maladie-digital/design-system/commit/647f1e50bd74b59fa1a04060652f64076dbb0541))

- ♻️ **Refactoring**
  - **rules:** Renommage de la règle de validation `length` en `maxLength` ([647f1e5](https://github.com/assurance-maladie-digital/design-system/commit/647f1e50bd74b59fa1a04060652f64076dbb0541))

- 🔧 **Configuration**
  - **scripts:** Renommage de la commande `demo:serve` en `playground` ([da697e3](https://github.com/assurance-maladie-digital/design-system/commit/da697e30d58715f5e984a72807e8bc9f1804aee7))

### 📚 Guide de migration

#### Import de la règle de validation `maxLength`

La règle de validation `length` a été renommée en `maxLength`, vous devez mettre à jour les imports de celle-ci :

```diff
-import length from '../../src/rules/length';
+import maxLength from '../../src/rules/maxLength';
```

## v2.0.0-alpha.3

**Version publiée le 05/06/2019.**

Cette version corrige les fichiers de build manquants dans la dernière version, elle n'apporte aucune modification.

## v2.0.0-alpha.2

**Version publiée le 05/06/2019.**

Cette version comporte un correctif sur le composant `PaginatedTable`.

### Vue Dot

- 🐛 **Corrections de bugs**
  - **PaginatedTable:** Correction de la récupération des items ([c3aa44e](https://github.com/assurance-maladie-digital/design-system/commit/c3aa44eaba503c62bc8542437b58ca70cfeef6e9))

## v2.0.0-alpha.1

**Version publiée le 05/06/2019.**

Cette version comporte un correctif sur la configuration du build.

### Interne

- 🐛 **Corrections de bugs**
  - **build:** Correction de la configuration ([9da1cf8](https://github.com/assurance-maladie-digital/design-system/commit/9da1cf88e9d2994afc5235104b466f63a0fa0d25))
