import { createApp } from 'vue'
import App from './App.vue'

import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';
import ProgressBar from 'primevue/progressbar';
import Badge from 'primevue/badge';
import Button from 'primevue/button';

const app = createApp(App);


app.use(PrimeVue)
app.use(ToastService);

app.component("Toast", Toast)
app.component("FileUpload", FileUpload)
app.component("Button", Button)
app.component("ProgressBar", ProgressBar)
app.component("Badge", Badge)

app.mount("#app")