// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { HomeComponent } 	from './home/home.component';
import { ZapatillasComponent } 	from './zapatillas/zapatillas.component';
import { VideojuegoComponent } 	from './videojuego/videojuego.component';
import { CursosComponent } 		from './cursos/cursos.component';
import { ExternoComponent } 		from './externo/externo.component';
import { ContactoComponent } 		from './contacto/contacto.component';

// Crear array de configuración de rutas
//	{path: <nombre que saldra en la url>, component: <componente que se cargara por defecto>}

const appRoutes : Routes = [
	{path:"", component: HomeComponent},
	{path:"home", component: HomeComponent},
	{path:"zapatillas", component: ZapatillasComponent},
	{path:"videojuego", component: VideojuegoComponent},
	{path:"cursos", component: CursosComponent},
		{path:"cursos/:nombre", component: CursosComponent},
		{path:"cursos/:nombre/:followers", component: CursosComponent},
	{path:"externo", component: ExternoComponent},
	{path:"contacto", component: ContactoComponent},
	
	// Esta ultima es la ruta correspondiente al 404
	{path: '**', component: HomeComponent}
];


// Exportar modulo del router
export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
	
	// Esta configuracion hay que importarla en el modulo app.module.ts
	// TAmbien hay que poner   <router-outlet></router-outlet> en app.module.html