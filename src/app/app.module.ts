import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from '@fullcalendar/angular';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppCodeModule } from './app.code.component';
import { CardModule } from 'primeng/card';

//Modulos

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppRightmenuComponent } from './app.rightmenu.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppSearchComponent } from './app.search.component';
import { AppFooterComponent } from './app.footer.component';
import { TableDemoComponent } from './demo/view/tabledemo.component';

import { AppCrudComponent } from './pages/app.crud.component';

import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppLoginComponent } from './pages/app.login.component';
import { CountryService } from './demo/service/countryservice';
import { CustomerService } from './demo/service/customerservice';
import { EventService } from './demo/service/eventservice';
import { IconService } from './demo/service/iconservice';
import { NodeService } from './demo/service/nodeservice';
import { PhotoService } from './demo/service/photoservice';
import { ProductService } from './demo/service/productservice';
import { BreadcrumbService } from './app.breadcrumb.service';
import { MenuService } from './app.menu.service';
import { EpisodioComponent } from './pages/episodio/episodio.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CardMortyComponent } from './shared/card-morty/card-morty.component';
import { PipesModule } from './pipes/pipes.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ResultEntregaComponent } from './pages/result-entrega/result-entrega.component';
import { BusquedasPadreComponent } from './pages/busquedas-padre/busquedas-padre.component';



FullCalendarModule.registerPlugins([ dayGridPlugin, timeGridPlugin, interactionPlugin ]);

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AccordionModule,
		AutoCompleteModule,
		AvatarModule,
		AvatarGroupModule,
		BadgeModule,
		BreadcrumbModule,
		ButtonModule,
		CalendarModule,
		CardModule,
		CarouselModule,
		CascadeSelectModule,
		ChartModule,
		CheckboxModule,
		ChipModule,
		ChipsModule,
		CodeHighlighterModule,
		ConfirmDialogModule,
		ConfirmPopupModule,
		ColorPickerModule,
		ContextMenuModule,
		DataViewModule,
		DialogModule,
		DividerModule,
		DropdownModule,
		FieldsetModule,
		FileUploadModule,
		FullCalendarModule,
		GalleriaModule,
		InplaceModule,
		InputNumberModule,
		InputMaskModule,
		InputSwitchModule,
		InputTextModule,
		InputTextareaModule,
		KnobModule,
		LightboxModule,
		ListboxModule,
		MegaMenuModule,
		MenuModule,
		MenubarModule,
		MessageModule,
		MessagesModule,
		MultiSelectModule,
		OrderListModule,
		OrganizationChartModule,
		OverlayPanelModule,
		PaginatorModule,
		PanelModule,
		PanelMenuModule,
		PasswordModule,
		PickListModule,
		ProgressBarModule,
		RadioButtonModule,
		RatingModule,
		RippleModule,
		ScrollPanelModule,
		ScrollTopModule,
		SelectButtonModule,
		SidebarModule,
		SkeletonModule,
		SlideMenuModule,
		SliderModule,
		SplitButtonModule,
		SplitterModule,
		StepsModule,
		TableModule,
		TabMenuModule,
		TabViewModule,
		TagModule,
		TerminalModule,
		TimelineModule,
		TieredMenuModule,
		ToastModule,
		ToggleButtonModule,
		ToolbarModule,
		TooltipModule,
		TreeModule,
		TreeTableModule,
		VirtualScrollerModule,
		CardModule,
        AppCodeModule,
        PipesModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		AppComponent,
		AppMainComponent,
		AppRightmenuComponent,
		AppMenuComponent,
		AppMenuitemComponent,
		AppTopBarComponent,
		AppSearchComponent,
		AppFooterComponent,
		TableDemoComponent,
		AppCrudComponent,
		AppLoginComponent,
		AppNotfoundComponent,
		AppErrorComponent,
		EpisodioComponent,
		PersonajesComponent,
		UbicacionComponent,
        CardMortyComponent,
        BusquedaComponent,
        ResultEntregaComponent,
        BusquedasPadreComponent,
      
     


	],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		CountryService,
		CustomerService,
		EventService,
		IconService,
		NodeService,
		PhotoService,
		ProductService,
		MenuService,
		BreadcrumbService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
