function Vitrine() {
    return (
     <>
     
     
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="filtroIngrediente">
					<p>Ou escolha seu ingrediente favorito:</p>
					<select name="filtro" id="filtroIngredienteTodos" className="filtroIngredienteTodos" style="display: block;">
						<option value=".todosindredientes">Todos os ingredientes</option>
    		<option value=".abacaxi">Abacaxi</option>
    		<option value=".aborora">Abóbora</option>
    		<option value=".ameixa">Ameixa</option>
    		<option value=".amendoim">Amendoim</option>
    		<option value=".avela">Avelã</option>
    		<option value=".baba-de-moca">Baba de Moça</option>
    		<option value=".banana">Banana</option>
    		<option value=".brigadeiro">Brigadeiro</option>
    		<option value=".cafe">Café</option>
    		<option value=".cappuccino">Cappuccino</option>
    		<option value=".caramelo">Caramelo</option>
    		<option value=".castanha">Castanha</option>
    		<option value=".castanha-de-caju">Castanha-de-Caju</option>
    		<option value=".castanha-do-para">Castanha-do-Pará</option>
    		<option value=".cenoura">Cenoura</option>
    		<option value=".cereja">Cereja</option>
    		<option value=".chantilly">Chantilly</option>
    		<option value=".chocolate-ao-leite">Chocolate ao Leite</option>
    		<option value=".chocolate-branco">Chocolate Branco</option>
    		<option value=".chocolate-meio-amargo">Chocolate Meio Amargo</option>
    		<option value=".coco">Coco</option>
    		<option value=".cream-cheese">Cream Cheese</option>
    		<option value=".crocante">Crocante</option>
    		<option value=".cupuaçu">Cupuaçu</option>
    		<option value=".damasco">Damasco</option>
    		<option value=".doce-de-leite">Doce de Leite</option>
    		<option value=".erva-doce">Erva Doce</option>
    		<option value=".figo">Figo</option>
    		<option value=".fuba">Fubá</option>
    		<option value=".goiabada">Goiabada</option>
    		<option value=".iogurte">Iogurte</option>
    		<option value=".kiwi">Kiwi</option>
    		<option value=".laranja">Laranja</option>
    		<option value=".leite-condensado">Leite Condensado</option>
    		<option value=".leite-em-po">Leite Ninho®</option>
    		<option value=".limao">Limão</option>
    		<option value=".limao-siciliano">Limão Sicialiano</option>
    		<option value=".manga">Manga</option>
    		<option value=".maracuja">Maracujá</option>
    		<option value=".marshmallow">Marshmallow</option>
    		<option value=".milho">Milho</option>
    		<option value=".morango">Morango</option>
    		<option value=".mousse">Mousse</option>
    		<option value=".nozes">Nozes</option>
    		<option value=".nutella">Nutella®</option>
    		<option value=".pacoca">Paçoca</option>
    		<option value=".pessego">Pêssego</option>
    		<option value=".pimenta">Pimenta</option>
    		<option value=".pistache">Pistache</option>
    		<option value=".coalho">Queijo Coalho</option>
    		<option value=".parmesao">Queijo Parmesão</option>
    		<option value=".suspiro">Suspiro</option>
    		<option value=".tapioca">Tapioca</option>
    		<option value=".uva">Uva</option>
     
					</select>
					<select name="filtro" id="filtroIngredienteChocolate" className="filtroIngredienteTodos" style="display: none;">
						<option value=".todosindredientes">Todos os ingredientes</option>
    		<option value=".amendoim">Amendoim</option>
    		<option value=".avela">Avelã</option>
    		<option value=".baba-de-moca">Baba de Moça</option>
    		<option value=".brigadeiro">Brigadeiro</option>
    		<option value=".castanha">Castanha</option>
    		<option value=".castanha-de-caju">Castanha-de-Caju</option>
    		<option value=".castanha-do-para">Castanha-do-Pará</option>
    		<option value=".cereja">Cereja</option>
    		<option value=".chocolate-ao-leite">Chocolate ao Leite</option>
    		<option value=".chocolate-branco">Chocolate Branco</option>
    		<option value=".chocolate-meio-amargo">Chocolate Meio Amargo</option>
    		<option value=".coco">Coco</option>
    		<option value=".cream-cheese">Cream Cheese</option>
    		<option value=".doce-de-leite"> Doce de Leite</option>
    		<option value=".iogurte">Iogurte</option>
    		<option value=".leite-condensado">Leite Condensado</option>
    		<option value=".leite-em-po">Leite Ninho®</option>
    		<option value=".limao">Limão</option>
    		<option value=".maracuja">Maracujá</option>
    		<option value=".marshmallow">Marshmallow</option>
    		<option value=".morango">Morango</option>
    		<option value=".mousse">Mousse</option>
    		<option value=".nozes">Nozes</option>
    		<option value=".nutella">Nutella®</option>
    		<option value=".pacoca">Paçoca</option>
    		<option value=".suspiro">Suspiro</option>
     					</select>
					<select name="filtro" id="filtroIngredienteBranco" className="filtroIngredienteTodos" style="display: none;">
						<option value=".todosindredientes">Todos os ingredientes</option>
    		<option value=".abacaxi">Abacaxi</option>
    		<option value=".abobora">Abóbora</option>
    		<option value=".ameixa">Ameixa</option>
    		<option value=".amendoim">Amendoim</option>
    		<option value=".avela">Avelã</option>
    		<option value=".baba-de-moca">Baba de Moça</option>
    		<option value=".brigadeiro">Brigadeiro</option>
    		<option value=".cafe">Café</option>
    		<option value=".cappuccino">Cappuccino</option>
    		<option value=".caramelo">Caramelo</option>
    		<option value=".castanha">Castanha</option>
    		<option value=".castanha-de-caju">Castanha-de-caju</option>
    		<option value=".castanha-do-para">Castanha-do-Pará</option>
    		<option value=".chantilly">Chantilly</option>
    		<option value=".chocolate-ao-leite">Chocolate ao Leite</option>
    		<option value=".chocolate-branco">Chocolate Branco</option>
    		<option value=".chocolate-meio-amargo">Chocolate Meio Amargo</option>
    		<option value=".coco">Coco</option>
    		<option value=".cream-cheese">Cream cheese</option>
    		<option value=".crocante">Crocante</option>
    		<option value=".cupuaçu">Cupuaçu</option>
    		<option value=".damasco">Damasco</option>
    		<option value=".doce-de-leite">Doce de Leite</option>
    		<option value=".figo">Figo</option>
    		<option value=".goiabada">Goiabada</option>
    		<option value=".iogurte">Iogurte</option>
    		<option value=".kiwi">Kiwi</option>
    		<option value=".leite-condensado">Leite Condensado</option>
    		<option value=".leite-em-po">Leite Ninho®</option>
    		<option value=".limao">Limão</option>
    		<option value=".limao-siciliano">Limão Siciliano</option>
    		<option value=".manga">Manga</option>
    		<option value=".maracuja">Maracujá</option>
    		<option value=".marshmallow">Marshmallow</option>
    		<option value=".morango">Morango</option>
    		<option value=".mousse">Mousse</option>
    		<option value=".nozes">Nozes</option>
    		<option value=".nutella">Nutella®</option>
    		<option value=".pessego">Pêssego</option>
    		<option value=".pimenta">Pimenta</option>
    		<option value=".pistache">Pistache</option>
    		<option value=".coalho">Queijo Coalho</option>
    		<option value=".parmesao">Queijo Parmesão</option>
    		<option value=".suspiro">Suspiro</option>
    		<option value=".tapioca">Tapioca</option>
    		<option value=".uva">Uva</option>
     					</select>
					<select name="filtro" id="filtroIngredienteZero" className="filtroIngredienteTodos" style="display: none;">
						<option value=".todosindredientes">Todos os ingredientes</option>
    		<option value=".abacaxi">Abacaxi</option>
    		<option value=".amendoim">Amendoim</option>
    		<option value=".chocolate-ao-leite">Chocolate ao leite</option>
    		<option value=".chocolate-branco">Chocolate branco</option>
    		<option value=".coco">Coco</option>
    		<option value=".damasco">Damasco</option>
    		<option value=".kiwi">Kiwi</option>
    		<option value=".maracuja">Maracujá</option>
    		<option value=".morango">Morango</option>
    		<option value=".mousse">Mousse</option>
    		<option value=".nozes">Nozes</option>
    		<option value=".pessego">Pêssego</option>
    		<option value=".uva">Uva</option>
     					</select>
					<select name="filtro" id="filtroIngredienteCaseiros" className="filtroIngredienteTodos" style="display: none;">
						<option value=".todosindredientes">Todos os ingredientes</option>
    		<option value=".abacaxi">Abacaxi</option>
    		<option value=".banana">Banana</option>
    		<option value=".cenoura">Cenoura</option>
    		<option value=".coco">Coco</option>
    		<option value=".erva-doce">Erva Doce</option>
    		<option value=".fuba">Fubá</option>
    		<option value=".goiabada">Goiabada</option>
    		<option value=".laranja">Laranja</option>
    		<option value=".leite-em-po">Leite Ninho®</option>
    		<option value=".limao">Limão</option>
    		<option value=".maracuja">Maracujá</option>
    		<option value=".milho">Milho</option>
    		<option value=".nutella">Nutella®</option>
     					</select>
				</div>
			</div>

			<div className="col-md-12 mt-4">

			
				<div className="row todosbolos-lista">
											<div className="col-md-3 col-6 todosindredientes 
													cereja													chocolate-ao-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#49</span>
																<a href="https://sodiedoces.com.br/bolo/bombom-branco-trufado/" target="_blank">
									<img fetchpriority="high" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bombom-branco-trufado/" target="_blank">Bombom Branco Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bombom-branco-trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cereja													chocolate-ao-leite													chocolate-meio-amargo						 ">
							<div className="bolo-box center">
								<span>#89</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-chocolate/" target="_blank">
									<img width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-chocolate/" target="_blank">Delícia de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-chocolate/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													pistache						 ">
							<div className="bolo-box center">
								<span>#163</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-pistache/" target="_blank">
									<img width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-pistache/" target="_blank">Bolo Pistache</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-pistache/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													banana													parmesao						 ">
							<div className="bolo-box center">
								<span>#157</span>
																<a href="https://sodiedoces.com.br/bolo/cartola/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164319/157_cartola_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164319/157_cartola_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164319/157_cartola_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cartola/" target="_blank">Cartola</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cartola/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abobora													coco													mousse						 ">
							<div className="bolo-box center">
								<span>#154</span>
																<a href="https://sodiedoces.com.br/bolo/abobora-com-cocada/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abobora-com-cocada/" target="_blank">Abóbora com Cocada</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abobora-com-cocada/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													castanha-do-para						 ">
							<div className="bolo-box center">
								<span>#159</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/" target="_blank">Delícia de Castanha Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													castanha-do-para													cupuacu													mousse						 ">
							<div className="bolo-box center">
								<span>#158</span>
																<a href="https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/" target="_blank">Cupuaçu com Castanha-do-Pará</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													coco													leite-condensado													tapioca						 ">
							<div className="bolo-box center">
								<span>#156</span>
																<a href="https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/" target="_blank">Tapioca com Coco e Moça®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													doce-de-leite													parmesao						 ">
							<div className="bolo-box center">
								<span>#155</span>
																<a href="https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/" target="_blank">Parmesão e Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													goiabada													leite-condensado						 ">
							<div className="bolo-box center">
								<span>#164</span>
																<a href="https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/" target="_blank">Cuca de Goiabada e Moça®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													castanha-de-caju													cereja													doce-de-leite													marshmallow						 ">
							<div className="bolo-box center">
								<span>#162</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-ana/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/01144153/20412_imagem_site_lancamento_bolo_ana_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/01144153/20412_imagem_site_lancamento_bolo_ana_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/01144153/20412_imagem_site_lancamento_bolo_ana_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-ana/" target="_blank">Bolo Ana</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-ana/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#152</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/" target="_blank">Brigadeiro Branco com Morangos Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#151</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/" target="_blank">Brigadeiro Tradicional Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#129</span>
																<a href="https://sodiedoces.com.br/bolo/chifon-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chifon-zero-acucar/" target="_blank">Chifon Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chifon-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													leite-em-po						 ">
							<div className="bolo-box center">
								<span>#128</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/" target="_blank">Delícia de Leite II Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco						 ">
							<div className="bolo-box center">
								<span>#153</span>
																<a href="https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/" target="_blank">Aerado Branco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													coco													nutella						 ">
							<div className="bolo-box center">
								<span>#824</span>
																<a href="https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/" target="_blank">Caseirinho de Coco com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													nutella						 ">
							<div className="bolo-box center">
								<span>#826</span>
																<a href="https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/" target="_blank">Caseirinho Crispy com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													doce-de-leite													nutella						 ">
							<div className="bolo-box center">
								<span>#825</span>
																<a href="https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/" target="_blank">Caseirinho de Pão de Mel com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													cenoura													nutella						 ">
							<div className="bolo-box center">
								<span>#822</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/" target="_blank">Bolo Caseiro de Cenoura com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													chocolate-ao-leite													nutella						 ">
							<div className="bolo-box center">
								<span>#823</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-chocolate-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-chocolate-com-nutella/" target="_blank">Bolo Caseiro de Chocolate com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-chocolate-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													chocolate-ao-leite													leite-em-po													nutella						 ">
							<div className="bolo-box center">
								<span>#150</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-duo-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-duo-com-nutella/" target="_blank">Delícia de Leite Duo com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-duo-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													chocolate-ao-leite													morango													nutella						 ">
							<div className="bolo-box center">
								<span>#149</span>
																<a href="https://sodiedoces.com.br/bolo/morango-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-com-nutella/" target="_blank">Morango com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													chocolate-ao-leite													nutella						 ">
							<div className="bolo-box center">
								<span>#148</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-nutella/" target="_blank">Trufado com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													mousse						 ">
							<div className="bolo-box center">
								<span>#127</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeirinho/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeirinho/" target="_blank">Brigadeirinho</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeirinho/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
						 ">
							<div className="bolo-box center">
								<span>#143</span>
																<a href="https://sodiedoces.com.br/bolo/limao-siciliano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115753/25972_lim_o_siciliano_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115753/25972_lim_o_siciliano_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115753/25972_lim_o_siciliano_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/limao-siciliano/" target="_blank">Limão Siciliano</a></h2>
								<a href="https://sodiedoces.com.br/bolo/limao-siciliano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													banana													crocante													doce-de-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#144</span>
																<a href="https://sodiedoces.com.br/bolo/banoffee/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115752/25972_banoffe_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115752/25972_banoffe_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115752/25972_banoffe_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/banoffee/" target="_blank">Banoffee</a></h2>
								<a href="https://sodiedoces.com.br/bolo/banoffee/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													coco													manga													maracuja						 ">
							<div className="bolo-box center">
								<span>#145</span>
																<a href="https://sodiedoces.com.br/bolo/frutas-amarelas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115748/25972_frutas_amarelas_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115748/25972_frutas_amarelas_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115748/25972_frutas_amarelas_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/frutas-amarelas/" target="_blank">Frutas Amarelas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/frutas-amarelas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#146</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-zero-acucar/" target="_blank">Trufado de Chocolate Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													morango						 ">
							<div className="bolo-box center">
								<span>#147</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-com-morango-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-com-morango-zero-acucar/" target="_blank">Trufado de Chocolate com Morango Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-com-morango-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco						 ">
							<div className="bolo-box center">
								<span>#139</span>
																<a href="https://sodiedoces.com.br/bolo/baileys-trufado-de-chocolate-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baileys-trufado-de-chocolate-2/" target="_blank">Baileys™ Trufado de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baileys-trufado-de-chocolate-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													coco													nozes						 ">
							<div className="bolo-box center">
								<span>#138</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-vegano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-vegano/" target="_blank">Bolo Vegano de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-vegano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													doce-de-leite						 ">
							<div className="bolo-box center">
								<span>#134</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-de-creme-e-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-de-creme-e-doce-de-leite/" target="_blank">Bolo Massa Folhada de Creme e Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-de-creme-e-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													baba-de-moca													doce-de-leite						 ">
							<div className="bolo-box center">
								<span>#135</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-com-baba-de-moca-e-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161223/135_fatia_bolo_folhado_baba_moca_e_doce_de_leite_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161223/135_fatia_bolo_folhado_baba_moca_e_doce_de_leite_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161223/135_fatia_bolo_folhado_baba_moca_e_doce_de_leite_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-com-baba-de-moca-e-doce-de-leite/" target="_blank">Bolo Massa Folhada com Baba de Moça e Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-com-baba-de-moca-e-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cream-cheese													leite-condensado													mousse						 ">
							<div className="bolo-box center">
								<span>#130</span>
																<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-brasileiro/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-brasileiro/" target="_blank">Red Velvet (Perfil Brasileiro)</a></h2>
								<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-brasileiro/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cream-cheese													mousse						 ">
							<div className="bolo-box center">
								<span>#122</span>
																<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-americano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161219/130_fatia_bolo_de_red_velvet_america_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161219/130_fatia_bolo_de_red_velvet_america_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161219/130_fatia_bolo_de_red_velvet_america_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-americano/" target="_blank">Red Velvet (Perfil Americano)</a></h2>
								<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-americano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													crocante													mousse						 ">
							<div className="bolo-box center">
								<span>#119</span>
																	<img id="selo-bolo-mes" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/01/06115348/SELO_BOLO_DO_MES-01-1-2023.png" alt="BOLO DO MÊS"/>
																<a href="https://sodiedoces.com.br/bolo/bolo-de-churros/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-de-churros/" target="_blank">Bolo Moça® Churros</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-de-churros/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													coco													doce-de-leite													leite-em-po													marshmallow						 ">
							<div className="bolo-box center">
								<span>#133</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-da-maria/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161221/133_fatia_bolo_da_maria_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161221/133_fatia_bolo_da_maria_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161221/133_fatia_bolo_da_maria_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-da-maria/" target="_blank">Bolo da Maria</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-da-maria/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													goiabada													leite-em-po						 ">
							<div className="bolo-box center">
								<span>#819</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-vulcao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-vulcao/" target="_blank">Bolo Vulcão de Leite Ninho® com Goiabada</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-vulcao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													maracuja						 ">
							<div className="bolo-box center">
								<span>#804</span>
																<a href="https://sodiedoces.com.br/bolo/maracuja-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/maracuja-2/" target="_blank">Maracujá</a></h2>
								<a href="https://sodiedoces.com.br/bolo/maracuja-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													limao						 ">
							<div className="bolo-box center">
								<span>#802</span>
																<a href="https://sodiedoces.com.br/bolo/limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/limao/" target="_blank">Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													fuba						 ">
							<div className="bolo-box center">
								<span>#808</span>
																<a href="https://sodiedoces.com.br/bolo/fuba-simples/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/fuba-simples/" target="_blank">Fubá Simples</a></h2>
								<a href="https://sodiedoces.com.br/bolo/fuba-simples/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
						 ">
							<div className="bolo-box center">
								<span>#806</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate/" target="_blank">Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#06</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-brigadeiro-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-brigadeiro-ii/" target="_blank">Brigadeiro II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-brigadeiro-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													coco													marshmallow													mousse						 ">
							<div className="bolo-box center">
								<span>#37</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco/" target="_blank">Abacaxi com Coco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													iogurte													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#30</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-iogurte-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24181429/20412_trufado_com_iogurte_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24181429/20412_trufado_com_iogurte_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24181429/20412_trufado_com_iogurte_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-iogurte-2/" target="_blank">Trufado com Iogurte</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-iogurte-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													castanha													chocolate-ao-leite													iogurte													nutella						 ">
							<div className="bolo-box center">
								<span>#04</span>
																<a href="https://sodiedoces.com.br/bolo/avela/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111002/04_avela_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111002/04_avela_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111002/04_avela_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/avela/" target="_blank">NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/avela/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi						 ">
							<div className="bolo-box center">
								<span>#801</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-2/" target="_blank">Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													banana						 ">
							<div className="bolo-box center">
								<span>#800</span>
																<a href="https://sodiedoces.com.br/bolo/banana/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/banana/" target="_blank">Banana</a></h2>
								<a href="https://sodiedoces.com.br/bolo/banana/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													erva-doce													fuba						 ">
							<div className="bolo-box center">
								<span>#809</span>
																<a href="https://sodiedoces.com.br/bolo/fuba-com-erva-doce/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/fuba-com-erva-doce/" target="_blank">Fubá com Erva-Doce</a></h2>
								<a href="https://sodiedoces.com.br/bolo/fuba-com-erva-doce/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													fuba													goiabada						 ">
							<div className="bolo-box center">
								<span>#810</span>
																<a href="https://sodiedoces.com.br/bolo/fuba-com-goiabada/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/fuba-com-goiabada/" target="_blank">Fubá com Goiabada</a></h2>
								<a href="https://sodiedoces.com.br/bolo/fuba-com-goiabada/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													laranja						 ">
							<div className="bolo-box center">
								<span>#813</span>
																<a href="https://sodiedoces.com.br/bolo/laranja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/laranja/" target="_blank">Laranja</a></h2>
								<a href="https://sodiedoces.com.br/bolo/laranja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cenoura						 ">
							<div className="bolo-box center">
								<span>#811</span>
																<a href="https://sodiedoces.com.br/bolo/cenoura/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cenoura/" target="_blank">Cenoura</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cenoura/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													milho						 ">
							<div className="bolo-box center">
								<span>#815</span>
																<a href="https://sodiedoces.com.br/bolo/milho/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/milho/" target="_blank">Milho</a></h2>
								<a href="https://sodiedoces.com.br/bolo/milho/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													coco						 ">
							<div className="bolo-box center">
								<span>#816</span>
																<a href="https://sodiedoces.com.br/bolo/toalha-felpuda/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/toalha-felpuda/" target="_blank">Toalha Felpuda</a></h2>
								<a href="https://sodiedoces.com.br/bolo/toalha-felpuda/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
						 ">
							<div className="bolo-box center">
								<span>#818</span>
																<a href="https://sodiedoces.com.br/bolo/formigueiro/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/formigueiro/" target="_blank">Formigueiro</a></h2>
								<a href="https://sodiedoces.com.br/bolo/formigueiro/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cream-cheese													goiabada													leite-condensado						 ">
							<div className="bolo-box center">
								<span>#131</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-moca-romeu/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-moca-romeu/" target="_blank">Bolo Moça® Romeu</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-moca-romeu/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													crocante													leite-condensado													mousse						 ">
							<div className="bolo-box center">
								<span>#123</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-moca-pudim/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-moca-pudim/" target="_blank">Bolo Moça® Pudim</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-moca-pudim/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													doce-de-leite													leite-em-po													mousse													nozes						 ">
							<div className="bolo-box center">
								<span>#114</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-nozes/" target="_blank">Delícia de Leite com Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													chocolate-branco													doce-de-leite													mousse													uva						 ">
							<div className="bolo-box center">
								<span>#106</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-uva-com-abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03160253/106_deliai_de_uva_c_abacaxi_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03160253/106_deliai_de_uva_c_abacaxi_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03160253/106_deliai_de_uva_c_abacaxi_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-uva-com-abacaxi/" target="_blank">Delícia de Uva com Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-uva-com-abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#115</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-galak/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155340/115_bolo_feito_c_galak_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155340/115_bolo_feito_c_galak_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155340/115_bolo_feito_c_galak_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-feito-com-galak/" target="_blank">Bolo Feito com Galak®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-galak/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													chocolate-branco													mousse													pimenta						 ">
							<div className="bolo-box center">
								<span>#117</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-de-pimenta/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/117_bolo-de-pimenta_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/117_bolo-de-pimenta_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/117_bolo-de-pimenta_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-de-pimenta/" target="_blank">Bolo de Pimenta</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-de-pimenta/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													cafe													chocolate-ao-leite													leite-em-po													mousse						 ">
							<div className="bolo-box center">
								<span>#94</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-cafe/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-cafe/" target="_blank">Delícia de Café</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-cafe/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													castanha-de-caju													chocolate-branco													leite-em-po													mousse													nutella						 ">
							<div className="bolo-box center">
								<span>#93</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-ii/" target="_blank">Delícia de Leite com NUTELLA® ll</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													leite-em-po													limao													mousse						 ">
							<div className="bolo-box center">
								<span>#91</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-limao/" target="_blank">Delícia de Leite com Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#104</span>
																<a href="https://sodiedoces.com.br/bolo/frutas-vermelhas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/frutas-vermelhas/" target="_blank">Frutas Vermelhas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/frutas-vermelhas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													baba-de-moca													castanha-de-caju													crocante													damasco													marshmallow													suspiro						 ">
							<div className="bolo-box center">
								<span>#102</span>
																<a href="https://sodiedoces.com.br/bolo/dom-sodie/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/dom-sodie/" target="_blank">Dom Sodiê</a></h2>
								<a href="https://sodiedoces.com.br/bolo/dom-sodie/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#100</span>
																<a href="https://sodiedoces.com.br/bolo/sofia-rosa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/sofia-rosa/" target="_blank">Sofia Rosa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/sofia-rosa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													leite-em-po													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#82</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-morango/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111124/82_delicia-de-leite_c-morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111124/82_delicia-de-leite_c-morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111124/82_delicia-de-leite_c-morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-morango/" target="_blank">Delícia de Leite com Morango</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-morango/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													leite-condensado													mousse						 ">
							<div className="bolo-box center">
								<span>#79</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-leite-condensado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-leite-condensado/" target="_blank">Abacaxi com Leite Condensado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-leite-condensado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chantilly													chocolate-branco													damasco													mousse													nozes						 ">
							<div className="bolo-box center">
								<span>#68</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco/" target="_blank">Trufas Brancas com Nozes e Damasco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													mousse													nozes						 ">
							<div className="bolo-box center">
								<span>#67</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes/" target="_blank">Trufas Brancas com Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#66</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-gotas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03162058/66_trufas_branca_c_gotas_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03162058/66_trufas_branca_c_gotas_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03162058/66_trufas_branca_c_gotas_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-gotas/" target="_blank">Trufas Brancas com Gotas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-gotas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													figo													kiwi													manga													morango													mousse													pessego						 ">
							<div className="bolo-box center">
								<span>#65</span>
																<a href="https://sodiedoces.com.br/bolo/salada-de-frutas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/salada-de-frutas/" target="_blank">Salada de Frutas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/salada-de-frutas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													mousse													pessego						 ">
							<div className="bolo-box center">
								<span>#64</span>
																<a href="https://sodiedoces.com.br/bolo/pessego/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180615/20412_pessego_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180615/20412_pessego_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180615/20412_pessego_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/pessego/" target="_blank">Pêssego</a></h2>
								<a href="https://sodiedoces.com.br/bolo/pessego/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													ameixa													coco													doce-de-leite													marshmallow						 ">
							<div className="bolo-box center">
								<span>#63</span>
																	<img id="selo-bolo-mes" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/01/06115348/SELO_BOLO_DO_MES-01-1-2023.png" alt="BOLO DO MÊS"/>
																<a href="https://sodiedoces.com.br/bolo/olho-de-sogra/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/olho-de-sogra/" target="_blank">Olho de Sogra</a></h2>
								<a href="https://sodiedoces.com.br/bolo/olho-de-sogra/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													doce-de-leite													marshmallow													nozes						 ">
							<div className="bolo-box center">
								<span>#62</span>
																<a href="https://sodiedoces.com.br/bolo/nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/nozes/" target="_blank">Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													leite-condensado													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#61</span>
																<a href="https://sodiedoces.com.br/bolo/morango-com-leite-condensado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-com-leite-condensado/" target="_blank">Morango com Leite Condensado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-com-leite-condensado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													crocante													doce-de-leite													marshmallow													morango						 ">
							<div className="bolo-box center">
								<span>#60</span>
																<a href="https://sodiedoces.com.br/bolo/morango-com-crocante/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-com-crocante/" target="_blank">Morango com Crocante</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-com-crocante/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#59</span>
																<a href="https://sodiedoces.com.br/bolo/morango/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango/" target="_blank">Morango</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													maracuja													mousse						 ">
							<div className="bolo-box center">
								<span>#58</span>
																<a href="https://sodiedoces.com.br/bolo/maracuja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/maracuja/" target="_blank">Maracujá</a></h2>
								<a href="https://sodiedoces.com.br/bolo/maracuja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													iogurte													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#57</span>
																<a href="https://sodiedoces.com.br/bolo/iogurte-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/57.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/57.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/57-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/iogurte-ii/" target="_blank">Iogurte II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/iogurte-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													limao													marshmallow						 ">
							<div className="bolo-box center">
								<span>#56</span>
																<a href="https://sodiedoces.com.br/bolo/ganache-de-limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/ganache-de-limao/" target="_blank">Ganache de Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/ganache-de-limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													coco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#55</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-morango/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-morango/" target="_blank">Delícia de Morango</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-morango/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													leite-em-po													mousse						 ">
							<div className="bolo-box center">
								<span>#54</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii/" target="_blank">Delícia de Leite Ninho® II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													coco													doce-de-leite													marshmallow						 ">
							<div className="bolo-box center">
								<span>#53</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-abacaxi/" target="_blank">Delícia de Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													castanha-de-caju													crocante													doce-de-leite													marshmallow						 ">
							<div className="bolo-box center">
								<span>#52</span>
																<a href="https://sodiedoces.com.br/bolo/crocante/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/crocante/" target="_blank">Crocante</a></h2>
								<a href="https://sodiedoces.com.br/bolo/crocante/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#51</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-branco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111113/51_chocolate_branco_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111113/51_chocolate_branco_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111113/51_chocolate_branco_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-branco/" target="_blank">Chocolate Branco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-branco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													chantilly													chocolate-ao-leite													morango						 ">
							<div className="bolo-box center">
								<span>#50</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-creme-e-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-com-creme-e-morangos/" target="_blank">Brigadeiro com Creme e Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-creme-e-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#48</span>
																<a href="https://sodiedoces.com.br/bolo/bombom-branco-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111111/48_bombom_branco_c-morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111111/48_bombom_branco_c-morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111111/48_bombom_branco_c-morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bombom-branco-com-morangos/" target="_blank">Bombom Branco com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bombom-branco-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#47</span>
																<a href="https://sodiedoces.com.br/bolo/bombom-branco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155730/47_bombom_branco_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155730/47_bombom_branco_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155730/47_bombom_branco_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bombom-branco/" target="_blank">Bombom Branco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bombom-branco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													chocolate-branco													doce-de-leite						 ">
							<div className="bolo-box center">
								<span>#46</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-gelado-de-abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-gelado-de-abacaxi/" target="_blank">Bolo Gelado de Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-gelado-de-abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													caramelo													chocolate-ao-leite													doce-de-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#45</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-da-vovo/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/45.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/45.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/45-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-da-vovo/" target="_blank">Bolo da Vovó</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-da-vovo/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													coco													marshmallow						 ">
							<div className="bolo-box center">
								<span>#44</span>
																<a href="https://sodiedoces.com.br/bolo/beijinho/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/beijinho/" target="_blank">Beijinho</a></h2>
								<a href="https://sodiedoces.com.br/bolo/beijinho/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													baba-de-moca													caramelo													doce-de-leite													marshmallow						 ">
							<div className="bolo-box center">
								<span>#42</span>
																<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-doce-de-leite/" target="_blank">Baba de Moça com Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													baba-de-moca													doce-de-leite													mousse													nozes						 ">
							<div className="bolo-box center">
								<span>#43</span>
																<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-nozes/" target="_blank">Baba de Moça com Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													baba-de-moca													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#41</span>
																<a href="https://sodiedoces.com.br/bolo/baba-de-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baba-de-moca/" target="_blank">Baba de Moça</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baba-de-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													ameixa													doce-de-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#40</span>
																<a href="https://sodiedoces.com.br/bolo/ameixa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/ameixa/" target="_blank">Ameixa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/ameixa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													morango													mousse													suspiro						 ">
							<div className="bolo-box center">
								<span>#39</span>
																<a href="https://sodiedoces.com.br/bolo/alpes-suicos-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpes-suicos-com-morangos/" target="_blank">Alpes Suíços com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpes-suicos-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													marshmallow													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#38</span>
																<a href="https://sodiedoces.com.br/bolo/alaska/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alaska/" target="_blank">Alaska</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alaska/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													ameixa													mousse						 ">
							<div className="bolo-box center">
								<span>#36</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-ameixa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-ameixa/" target="_blank">Abacaxi com Ameixa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-ameixa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													mousse						 ">
							<div className="bolo-box center">
								<span>#35</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi/" target="_blank">Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#71</span>
																<a href="https://sodiedoces.com.br/bolo/alpes-suicos-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpes-suicos-zero-acucar/" target="_blank">Alpes Suíços Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpes-suicos-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#73</span>
																<a href="https://sodiedoces.com.br/bolo/morango-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-zero-acucar/" target="_blank">Morango Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													morango						 ">
							<div className="bolo-box center">
								<span>#72</span>
																<a href="https://sodiedoces.com.br/bolo/chocomix-c-morangos-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103040/72_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103040/72_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103040/72_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomix-c-morangos-zero-acucar/" target="_blank">Chocomix com Morangos Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomix-c-morangos-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													kiwi													morango													mousse													uva													pessego						 ">
							<div className="bolo-box center">
								<span>#75</span>
																<a href="https://sodiedoces.com.br/bolo/salada-de-frutas-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/salada-de-frutas-zero-acucar/" target="_blank">Salada de Frutas Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/salada-de-frutas-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													damasco													mousse						 ">
							<div className="bolo-box center">
								<span>#76</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-c-damasco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103350/76_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103350/76_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103350/76_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-c-damasco-zero-acucar/" target="_blank">Trufado com Damasco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-c-damasco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco						 ">
							<div className="bolo-box center">
								<span>#77</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-zero-acucar/" target="_blank">Trufado Preto e Branco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													abacaxi													chocolate-branco													coco													mousse						 ">
							<div className="bolo-box center">
								<span>#69</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco-zero-acucar/" target="_blank">Abacaxi com Coco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													maracuja													mousse						 ">
							<div className="bolo-box center">
								<span>#74</span>
																<a href="https://sodiedoces.com.br/bolo/maracuja-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/maracuja-zero-acucar/" target="_blank">Maracujá Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/maracuja-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													damasco													mousse													nozes						 ">
							<div className="bolo-box center">
								<span>#78</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco-zero-acucar/" target="_blank">Trufas Brancas com Nozes e Damasco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#70</span>
																<a href="https://sodiedoces.com.br/bolo/aerado-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado-zero-acucar/" target="_blank">Aerado Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													chocolate-ao-leite													leite-em-po													mousse						 ">
							<div className="bolo-box center">
								<span>#124</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-nescau/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111041/124_nescau_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111041/124_nescau_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111041/124_nescau_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-feito-com-nescau/" target="_blank">Bolo Feito com Nescau®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-nescau/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#118</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-kitkat/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-feito-com-kitkat/" target="_blank">Bolo Feito com KitKat®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-kitkat/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-meio-amargo													mousse						 ">
							<div className="bolo-box center">
								<span>#113</span>
																<a href="https://sodiedoces.com.br/bolo/alpino/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162356/113_alpino_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162356/113_alpino_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162356/113_alpino_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpino/" target="_blank">Alpino®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpino/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													leite-condensado													mousse						 ">
							<div className="bolo-box center">
								<span>#98</span>
																	<img id="selo-bolo-mes" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/01/06115348/SELO_BOLO_DO_MES-01-1-2023.png" alt="BOLO DO MÊS"/>
																<a href="https://sodiedoces.com.br/bolo/chocomoca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomoca/" target="_blank">Chocomoça®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomoca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													leite-condensado													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#96</span>
																<a href="https://sodiedoces.com.br/bolo/morango-trufado-com-leite-condensado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-trufado-com-leite-condensado/" target="_blank">Morango Trufado com Leite Condensado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-trufado-com-leite-condensado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													leite-em-po													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#95</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-brigadeiro-e-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-brigadeiro-e-morangos/" target="_blank">Delícia de Leite com Brigadeiro e Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-brigadeiro-e-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													castanha-de-caju													chocolate-ao-leite													leite-em-po													mousse													nutella						 ">
							<div className="bolo-box center">
								<span>#92</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-i/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-i/" target="_blank">Delícia de Leite com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-i/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													chocolate-meio-amargo													mousse						 ">
							<div className="bolo-box center">
								<span>#88</span>
																<a href="https://sodiedoces.com.br/bolo/aerado-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado-ii/" target="_blank">Aerado II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#105</span>
																<a href="https://sodiedoces.com.br/bolo/chocotrufas-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocotrufas-com-morangos/" target="_blank">Chocotrufas com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocotrufas-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-meio-amargo						 ">
							<div className="bolo-box center">
								<span>#103</span>
																<a href="https://sodiedoces.com.br/bolo/meio-amargo/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/meio-amargo/" target="_blank">Meio Amargo</a></h2>
								<a href="https://sodiedoces.com.br/bolo/meio-amargo/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#101</span>
																<a href="https://sodiedoces.com.br/bolo/choc-rosa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/choc-rosa/" target="_blank">Choc Rosa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/choc-rosa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													leite-em-po													mousse						 ">
							<div className="bolo-box center">
								<span>#83</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-trufado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-trufado/" target="_blank">Delícia de Leite Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													avela													brigadeiro													castanha-de-caju													chocolate-ao-leite													nutella						 ">
							<div className="bolo-box center">
								<span>#80</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-avela/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-com-avela/" target="_blank">Brigadeiro com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-avela/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#34</span>
																<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111028/34_valsa-de-chocolate_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111028/34_valsa-de-chocolate_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111028/34_valsa-de-chocolate_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate-com-morangos/" target="_blank">Valsa de Chocolate com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													chocolate-ao-leite													chocolate-branco						 ">
							<div className="bolo-box center">
								<span>#33</span>
																<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111027/33_valsa-de-chocolate_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111027/33_valsa-de-chocolate_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111027/33_valsa-de-chocolate_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate/" target="_blank">Valsa de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#32</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-com-morangos/" target="_blank">Trufado Preto e Branco com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco						 ">
							<div className="bolo-box center">
								<span>#31</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco/" target="_blank">Trufado Preto e Branco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#29</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-gotas-de-chocolate-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-gotas-de-chocolate-2/" target="_blank">Trufado com Gotas de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-gotas-de-chocolate-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													limao													mousse						 ">
							<div className="bolo-box center">
								<span>#28</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-ganache-de-limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-ganache-de-limao/" target="_blank">Trufado com Ganache de Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-ganache-de-limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cereja													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#27</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-cereja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-cereja/" target="_blank">Trufado com Cereja</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-cereja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#26</span>
																<a href="https://sodiedoces.com.br/bolo/trufado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado/" target="_blank">Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													chocolate-ao-leite													mousse													pacoca						 ">
							<div className="bolo-box center">
								<span>#25</span>
																<a href="https://sodiedoces.com.br/bolo/pacoquinha/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/pacoquinha/" target="_blank">Paçoquinha</a></h2>
								<a href="https://sodiedoces.com.br/bolo/pacoquinha/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#24</span>
																<a href="https://sodiedoces.com.br/bolo/napolitano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/napolitano/" target="_blank">Napolitano</a></h2>
								<a href="https://sodiedoces.com.br/bolo/napolitano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#23</span>
																<a href="https://sodiedoces.com.br/bolo/sodie/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/sodie/" target="_blank">Sodiê</a></h2>
								<a href="https://sodiedoces.com.br/bolo/sodie/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#22</span>
																<a href="https://sodiedoces.com.br/bolo/magia/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/magia/" target="_blank">Magia</a></h2>
								<a href="https://sodiedoces.com.br/bolo/magia/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													cereja													chocolate-ao-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#20</span>
																<a href="https://sodiedoces.com.br/bolo/floresta-negra/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111017/20_delicia-de-cereja_floresta_negra_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111017/20_delicia-de-cereja_floresta_negra_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111017/20_delicia-de-cereja_floresta_negra_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/floresta-negra/" target="_blank">Delícia de Cereja (Floresta Negra)</a></h2>
								<a href="https://sodiedoces.com.br/bolo/floresta-negra/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													coco						 ">
							<div className="bolo-box center">
								<span>#19</span>
																<a href="https://sodiedoces.com.br/bolo/dois-amores/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/dois-amores/" target="_blank">Dois Amores</a></h2>
								<a href="https://sodiedoces.com.br/bolo/dois-amores/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													doce-de-leite													mousse													nozes						 ">
							<div className="bolo-box center">
								<span>#18</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-nozes/" target="_blank">Delícia de Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													leite-em-po													mousse						 ">
							<div className="bolo-box center">
								<span>#17</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite/" target="_blank">Delícia de Leite Ninho®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													coco													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#16</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-coco-com-morangos/" target="_blank">Delícia de Coco com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													coco													mousse						 ">
							<div className="bolo-box center">
								<span>#15</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-coco-ii/" target="_blank">Delícia de Coco II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													coco						 ">
							<div className="bolo-box center">
								<span>#14</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-coco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-coco/" target="_blank">Delícia de Coco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-coco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													morango													mousse						 ">
							<div className="bolo-box center">
								<span>#13</span>
																<a href="https://sodiedoces.com.br/bolo/chocomix-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomix-com-morangos/" target="_blank">Chocomix com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomix-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#12</span>
																<a href="https://sodiedoces.com.br/bolo/chocomix/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomix/" target="_blank">Chocomix</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomix/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													maracuja													mousse						 ">
							<div className="bolo-box center">
								<span>#11</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-com-maracuja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-com-maracuja/" target="_blank">Chocolate com Maracujá</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-com-maracuja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													chocolate-ao-leite													doce-de-leite													marshmallow													mousse						 ">
							<div className="bolo-box center">
								<span>#10</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-crocante/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/24181022/20412_chocolate_com_crocante_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/24181022/20412_chocolate_com_crocante_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/24181022/20412_chocolate_com_crocante_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-crocante/" target="_blank">Chocolate com Crocante</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-crocante/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													amendoim													chocolate-ao-leite													doce-de-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#09</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-com-amendoim/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111007/09_chocolate_c-amendoim_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111007/09_chocolate_c-amendoim_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111007/09_chocolate_c-amendoim_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-com-amendoim/" target="_blank">Chocolate com Amendoim</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-com-amendoim/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													mousse						 ">
							<div className="bolo-box center">
								<span>#08</span>
																<a href="https://sodiedoces.com.br/bolo/chifon/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chifon/" target="_blank">Chifon</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chifon/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#07</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional/" target="_blank">Brigadeiro Tradicional</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													baba-de-moca													brigadeiro													chocolate-ao-leite						 ">
							<div className="bolo-box center">
								<span>#05</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-baba-de-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-com-baba-de-moca/" target="_blank">Brigadeiro com Baba de Moça</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-baba-de-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													chocolate-branco													mousse						 ">
							<div className="bolo-box center">
								<span>#02</span>
																<a href="https://sodiedoces.com.br/bolo/aerado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado/" target="_blank">Aerado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													brigadeiro													chocolate-ao-leite													coco													mousse						 ">
							<div className="bolo-box center">
								<span>#01</span>
																<a href="https://sodiedoces.com.br/bolo/a-francesa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/a-francesa/" target="_blank">À Francesa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/a-francesa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 todosindredientes 
													chocolate-ao-leite													leite-em-po													mousse													suspiro						 ">
							<div className="bolo-box center">
								<span>#03</span>
																<a href="https://sodiedoces.com.br/bolo/alpes-suicos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpes-suicos/" target="_blank">Alpes Suíços</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpes-suicos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
									</div>

			
				<div className="row bolos-chocolate-lista all" style="display: none;">
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															cereja															chocolate-ao-leite															chocolate-meio-amargo							">
							<div className="bolo-box center">
								<span>#89</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-chocolate/" target="_blank">
									<img width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-chocolate/" target="_blank">Delícia de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-chocolate/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															brigadeiro															castanha-do-para							">
							<div className="bolo-box center">
								<span>#159</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/" target="_blank">Delícia de Castanha Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															avela															chocolate-ao-leite															morango															nutella							">
							<div className="bolo-box center">
								<span>#149</span>
																<a href="https://sodiedoces.com.br/bolo/morango-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-com-nutella/" target="_blank">Morango com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															avela															chocolate-ao-leite															nutella							">
							<div className="bolo-box center">
								<span>#148</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-nutella/" target="_blank">Trufado com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															brigadeiro															mousse							">
							<div className="bolo-box center">
								<span>#127</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeirinho/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeirinho/" target="_blank">Brigadeirinho</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeirinho/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco							">
							<div className="bolo-box center">
								<span>#139</span>
																<a href="https://sodiedoces.com.br/bolo/baileys-trufado-de-chocolate-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baileys-trufado-de-chocolate-2/" target="_blank">Baileys™ Trufado de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baileys-trufado-de-chocolate-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															coco															nozes							">
							<div className="bolo-box center">
								<span>#138</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-vegano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-vegano/" target="_blank">Bolo Vegano de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-vegano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															cream-cheese															leite-condensado															mousse							">
							<div className="bolo-box center">
								<span>#130</span>
																<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-brasileiro/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-brasileiro/" target="_blank">Red Velvet (Perfil Brasileiro)</a></h2>
								<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-brasileiro/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															cream-cheese															mousse							">
							<div className="bolo-box center">
								<span>#122</span>
																<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-americano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161219/130_fatia_bolo_de_red_velvet_america_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161219/130_fatia_bolo_de_red_velvet_america_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161219/130_fatia_bolo_de_red_velvet_america_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-americano/" target="_blank">Red Velvet (Perfil Americano)</a></h2>
								<a href="https://sodiedoces.com.br/bolo/red-velvet-perfil-americano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															brigadeiro															chocolate-ao-leite							">
							<div className="bolo-box center">
								<span>#06</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-brigadeiro-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-brigadeiro-ii/" target="_blank">Brigadeiro II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-brigadeiro-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															iogurte															morango															mousse							">
							<div className="bolo-box center">
								<span>#30</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-iogurte-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24181429/20412_trufado_com_iogurte_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24181429/20412_trufado_com_iogurte_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24181429/20412_trufado_com_iogurte_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-iogurte-2/" target="_blank">Trufado com Iogurte</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-iogurte-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															avela															castanha															chocolate-ao-leite															iogurte															nutella							">
							<div className="bolo-box center">
								<span>#04</span>
																<a href="https://sodiedoces.com.br/bolo/avela/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111002/04_avela_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111002/04_avela_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111002/04_avela_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/avela/" target="_blank">NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/avela/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															brigadeiro															chocolate-ao-leite															leite-em-po															mousse							">
							<div className="bolo-box center">
								<span>#124</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-nescau/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111041/124_nescau_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111041/124_nescau_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111041/124_nescau_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-feito-com-nescau/" target="_blank">Bolo Feito com Nescau®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-nescau/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															mousse							">
							<div className="bolo-box center">
								<span>#118</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-kitkat/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-feito-com-kitkat/" target="_blank">Bolo Feito com KitKat®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-kitkat/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-meio-amargo															mousse							">
							<div className="bolo-box center">
								<span>#113</span>
																<a href="https://sodiedoces.com.br/bolo/alpino/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162356/113_alpino_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162356/113_alpino_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162356/113_alpino_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpino/" target="_blank">Alpino®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpino/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															leite-condensado															mousse							">
							<div className="bolo-box center">
								<span>#98</span>
																	<img id="selo-bolo-mes" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/01/06115348/SELO_BOLO_DO_MES-01-1-2023.png" alt="BOLO DO MÊS"/>
																<a href="https://sodiedoces.com.br/bolo/chocomoca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomoca/" target="_blank">Chocomoça®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomoca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															leite-condensado															morango															mousse							">
							<div className="bolo-box center">
								<span>#96</span>
																<a href="https://sodiedoces.com.br/bolo/morango-trufado-com-leite-condensado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-trufado-com-leite-condensado/" target="_blank">Morango Trufado com Leite Condensado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-trufado-com-leite-condensado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															leite-em-po															morango															mousse							">
							<div className="bolo-box center">
								<span>#95</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-brigadeiro-e-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-brigadeiro-e-morangos/" target="_blank">Delícia de Leite com Brigadeiro e Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-brigadeiro-e-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															avela															castanha-de-caju															chocolate-ao-leite															leite-em-po															mousse															nutella							">
							<div className="bolo-box center">
								<span>#92</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-i/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-i/" target="_blank">Delícia de Leite com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-i/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															chocolate-meio-amargo															mousse							">
							<div className="bolo-box center">
								<span>#88</span>
																<a href="https://sodiedoces.com.br/bolo/aerado-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado-ii/" target="_blank">Aerado II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															morango															mousse							">
							<div className="bolo-box center">
								<span>#105</span>
																<a href="https://sodiedoces.com.br/bolo/chocotrufas-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocotrufas-com-morangos/" target="_blank">Chocotrufas com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocotrufas-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-meio-amargo							">
							<div className="bolo-box center">
								<span>#103</span>
																<a href="https://sodiedoces.com.br/bolo/meio-amargo/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/meio-amargo/" target="_blank">Meio Amargo</a></h2>
								<a href="https://sodiedoces.com.br/bolo/meio-amargo/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															morango															mousse							">
							<div className="bolo-box center">
								<span>#101</span>
																<a href="https://sodiedoces.com.br/bolo/choc-rosa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/choc-rosa/" target="_blank">Choc Rosa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/choc-rosa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															leite-em-po															mousse							">
							<div className="bolo-box center">
								<span>#83</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-trufado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-trufado/" target="_blank">Delícia de Leite Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															avela															brigadeiro															castanha-de-caju															chocolate-ao-leite															nutella							">
							<div className="bolo-box center">
								<span>#80</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-avela/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-com-avela/" target="_blank">Brigadeiro com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-avela/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															morango															mousse							">
							<div className="bolo-box center">
								<span>#34</span>
																<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111028/34_valsa-de-chocolate_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111028/34_valsa-de-chocolate_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111028/34_valsa-de-chocolate_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate-com-morangos/" target="_blank">Valsa de Chocolate com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															amendoim															chocolate-ao-leite															chocolate-branco							">
							<div className="bolo-box center">
								<span>#33</span>
																<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111027/33_valsa-de-chocolate_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111027/33_valsa-de-chocolate_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111027/33_valsa-de-chocolate_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate/" target="_blank">Valsa de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/valsa-de-chocolate/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															morango															mousse							">
							<div className="bolo-box center">
								<span>#32</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-com-morangos/" target="_blank">Trufado Preto e Branco com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco							">
							<div className="bolo-box center">
								<span>#31</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco/" target="_blank">Trufado Preto e Branco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															mousse							">
							<div className="bolo-box center">
								<span>#29</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-gotas-de-chocolate-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-gotas-de-chocolate-2/" target="_blank">Trufado com Gotas de Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-gotas-de-chocolate-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															limao															mousse							">
							<div className="bolo-box center">
								<span>#28</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-ganache-de-limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-ganache-de-limao/" target="_blank">Trufado com Ganache de Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-ganache-de-limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															cereja															chocolate-ao-leite							">
							<div className="bolo-box center">
								<span>#27</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-com-cereja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-com-cereja/" target="_blank">Trufado com Cereja</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-com-cereja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															mousse							">
							<div className="bolo-box center">
								<span>#26</span>
																<a href="https://sodiedoces.com.br/bolo/trufado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado/" target="_blank">Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															amendoim															chocolate-ao-leite															mousse															pacoca							">
							<div className="bolo-box center">
								<span>#25</span>
																<a href="https://sodiedoces.com.br/bolo/pacoquinha/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/pacoquinha/" target="_blank">Paçoquinha</a></h2>
								<a href="https://sodiedoces.com.br/bolo/pacoquinha/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-brancos								bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															morango															mousse							">
							<div className="bolo-box center">
								<span>#24</span>
																<a href="https://sodiedoces.com.br/bolo/napolitano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/napolitano/" target="_blank">Napolitano</a></h2>
								<a href="https://sodiedoces.com.br/bolo/napolitano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															morango															mousse							">
							<div className="bolo-box center">
								<span>#23</span>
																<a href="https://sodiedoces.com.br/bolo/sodie/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/sodie/" target="_blank">Sodiê</a></h2>
								<a href="https://sodiedoces.com.br/bolo/sodie/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															mousse							">
							<div className="bolo-box center">
								<span>#22</span>
																<a href="https://sodiedoces.com.br/bolo/magia/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/magia/" target="_blank">Magia</a></h2>
								<a href="https://sodiedoces.com.br/bolo/magia/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															cereja															chocolate-ao-leite															mousse							">
							<div className="bolo-box center">
								<span>#20</span>
																<a href="https://sodiedoces.com.br/bolo/floresta-negra/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111017/20_delicia-de-cereja_floresta_negra_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111017/20_delicia-de-cereja_floresta_negra_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111017/20_delicia-de-cereja_floresta_negra_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/floresta-negra/" target="_blank">Delícia de Cereja (Floresta Negra)</a></h2>
								<a href="https://sodiedoces.com.br/bolo/floresta-negra/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															coco							">
							<div className="bolo-box center">
								<span>#19</span>
																<a href="https://sodiedoces.com.br/bolo/dois-amores/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/dois-amores/" target="_blank">Dois Amores</a></h2>
								<a href="https://sodiedoces.com.br/bolo/dois-amores/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															doce-de-leite															mousse															nozes							">
							<div className="bolo-box center">
								<span>#18</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-nozes/" target="_blank">Delícia de Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															leite-em-po															mousse							">
							<div className="bolo-box center">
								<span>#17</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite/" target="_blank">Delícia de Leite Ninho®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															coco															morango															mousse							">
							<div className="bolo-box center">
								<span>#16</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-coco-com-morangos/" target="_blank">Delícia de Coco com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															coco															mousse							">
							<div className="bolo-box center">
								<span>#15</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-coco-ii/" target="_blank">Delícia de Coco II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-coco-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolo								bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															coco							">
							<div className="bolo-box center">
								<span>#14</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-coco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-coco/" target="_blank">Delícia de Coco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-coco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															morango															mousse							">
							<div className="bolo-box center">
								<span>#13</span>
																<a href="https://sodiedoces.com.br/bolo/chocomix-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomix-com-morangos/" target="_blank">Chocomix com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomix-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															mousse							">
							<div className="bolo-box center">
								<span>#12</span>
																<a href="https://sodiedoces.com.br/bolo/chocomix/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomix/" target="_blank">Chocomix</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomix/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															maracuja															mousse							">
							<div className="bolo-box center">
								<span>#11</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-com-maracuja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-com-maracuja/" target="_blank">Chocolate com Maracujá</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-com-maracuja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															amendoim															chocolate-ao-leite															doce-de-leite															marshmallow															mousse							">
							<div className="bolo-box center">
								<span>#10</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-crocante/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/24181022/20412_chocolate_com_crocante_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/24181022/20412_chocolate_com_crocante_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/24181022/20412_chocolate_com_crocante_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-crocante/" target="_blank">Chocolate com Crocante</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-crocante/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															amendoim															chocolate-ao-leite															doce-de-leite															mousse							">
							<div className="bolo-box center">
								<span>#09</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-com-amendoim/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111007/09_chocolate_c-amendoim_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111007/09_chocolate_c-amendoim_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111007/09_chocolate_c-amendoim_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-com-amendoim/" target="_blank">Chocolate com Amendoim</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-com-amendoim/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															mousse							">
							<div className="bolo-box center">
								<span>#08</span>
																<a href="https://sodiedoces.com.br/bolo/chifon/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chifon/" target="_blank">Chifon</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chifon/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															brigadeiro															chocolate-ao-leite							">
							<div className="bolo-box center">
								<span>#07</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional/" target="_blank">Brigadeiro Tradicional</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															baba-de-moca															brigadeiro															chocolate-ao-leite							">
							<div className="bolo-box center">
								<span>#05</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-baba-de-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-com-baba-de-moca/" target="_blank">Brigadeiro com Baba de Moça</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-baba-de-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															chocolate-branco															mousse							">
							<div className="bolo-box center">
								<span>#02</span>
																<a href="https://sodiedoces.com.br/bolo/aerado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado/" target="_blank">Aerado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															brigadeiro															chocolate-ao-leite															coco															mousse							">
							<div className="bolo-box center">
								<span>#01</span>
																<a href="https://sodiedoces.com.br/bolo/a-francesa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/a-francesa/" target="_blank">À Francesa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/a-francesa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-de-chocolate
															bolos-de-chocolate							todosindredientes
															chocolate-ao-leite															leite-em-po															mousse															suspiro							">
							<div className="bolo-box center">
								<span>#03</span>
																<a href="https://sodiedoces.com.br/bolo/alpes-suicos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpes-suicos/" target="_blank">Alpes Suíços</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpes-suicos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
									</div>


				<div className="row bolos-branco-lista all" style="display: none;">
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes cereja chocolate-ao-leite mousse ">
							<div className="bolo-box center">
								<span>#49</span>
																<a href="https://sodiedoces.com.br/bolo/bombom-branco-trufado/" target="_blank">
									<img fetchpriority="high" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bombom-branco-trufado/" target="_blank">Bombom Branco Trufado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bombom-branco-trufado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes pistache ">
							<div className="bolo-box center">
								<span>#163</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-pistache/" target="_blank">
									<img width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-pistache/" target="_blank">Bolo Pistache</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-pistache/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abobora coco mousse ">
							<div className="bolo-box center">
								<span>#154</span>
																<a href="https://sodiedoces.com.br/bolo/abobora-com-cocada/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abobora-com-cocada/" target="_blank">Abóbora com Cocada</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abobora-com-cocada/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes castanha-do-para cupuacu mousse ">
							<div className="bolo-box center">
								<span>#158</span>
																<a href="https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/" target="_blank">Cupuaçu com Castanha-do-Pará</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes coco leite-condensado tapioca ">
							<div className="bolo-box center">
								<span>#156</span>
																<a href="https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/" target="_blank">Tapioca com Coco e Moça®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes doce-de-leite parmesao ">
							<div className="bolo-box center">
								<span>#155</span>
																<a href="https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/" target="_blank">Parmesão e Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes goiabada leite-condensado ">
							<div className="bolo-box center">
								<span>#164</span>
																<a href="https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/" target="_blank">Cuca de Goiabada e Moça®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-brancobolos-brancos todosindredientes avela chocolate-ao-leite leite-em-po nutella ">
							<div className="bolo-box center">
								<span>#150</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-duo-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-duo-com-nutella/" target="_blank">Delícia de Leite Duo com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-duo-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-brancobolos-brancos todosindredientes ">
							<div className="bolo-box center">
								<span>#143</span>
																<a href="https://sodiedoces.com.br/bolo/limao-siciliano/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115753/25972_lim_o_siciliano_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115753/25972_lim_o_siciliano_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115753/25972_lim_o_siciliano_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/limao-siciliano/" target="_blank">Limão Siciliano</a></h2>
								<a href="https://sodiedoces.com.br/bolo/limao-siciliano/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-brancobolos-brancos todosindredientes banana crocante doce-de-leite mousse ">
							<div className="bolo-box center">
								<span>#144</span>
																<a href="https://sodiedoces.com.br/bolo/banoffee/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115752/25972_banoffe_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115752/25972_banoffe_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115752/25972_banoffe_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/banoffee/" target="_blank">Banoffee</a></h2>
								<a href="https://sodiedoces.com.br/bolo/banoffee/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-brancobolos-brancos todosindredientes coco manga maracuja ">
							<div className="bolo-box center">
								<span>#145</span>
																<a href="https://sodiedoces.com.br/bolo/frutas-amarelas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115748/25972_frutas_amarelas_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115748/25972_frutas_amarelas_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/14115748/25972_frutas_amarelas_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/frutas-amarelas/" target="_blank">Frutas Amarelas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/frutas-amarelas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes doce-de-leite ">
							<div className="bolo-box center">
								<span>#134</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-de-creme-e-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-de-creme-e-doce-de-leite/" target="_blank">Bolo Massa Folhada de Creme e Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-de-creme-e-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes baba-de-moca doce-de-leite ">
							<div className="bolo-box center">
								<span>#135</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-com-baba-de-moca-e-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161223/135_fatia_bolo_folhado_baba_moca_e_doce_de_leite_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161223/135_fatia_bolo_folhado_baba_moca_e_doce_de_leite_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161223/135_fatia_bolo_folhado_baba_moca_e_doce_de_leite_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-com-baba-de-moca-e-doce-de-leite/" target="_blank">Bolo Massa Folhada com Baba de Moça e Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-massa-folhada-com-baba-de-moca-e-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes crocante mousse ">
							<div className="bolo-box center">
								<span>#119</span>
																	<img id="selo-bolo-mes" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/01/06115348/SELO_BOLO_DO_MES-01-1-2023.png" alt="BOLO DO MÊS"/>
																<a href="https://sodiedoces.com.br/bolo/bolo-de-churros/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-de-churros/" target="_blank">Bolo Moça® Churros</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-de-churros/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi coco doce-de-leite leite-em-po marshmallow ">
							<div className="bolo-box center">
								<span>#133</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-da-maria/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161221/133_fatia_bolo_da_maria_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161221/133_fatia_bolo_da_maria_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161221/133_fatia_bolo_da_maria_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-da-maria/" target="_blank">Bolo da Maria</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-da-maria/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi coco marshmallow mousse ">
							<div className="bolo-box center">
								<span>#37</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco/" target="_blank">Abacaxi com Coco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes cream-cheese goiabada leite-condensado ">
							<div className="bolo-box center">
								<span>#131</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-moca-romeu/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-moca-romeu/" target="_blank">Bolo Moça® Romeu</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-moca-romeu/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes crocante leite-condensado mousse ">
							<div className="bolo-box center">
								<span>#123</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-moca-pudim/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-moca-pudim/" target="_blank">Bolo Moça® Pudim</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-moca-pudim/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco doce-de-leite leite-em-po mousse nozes ">
							<div className="bolo-box center">
								<span>#114</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-nozes/" target="_blank">Delícia de Leite com Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi chocolate-branco doce-de-leite mousse uva ">
							<div className="bolo-box center">
								<span>#106</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-uva-com-abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03160253/106_deliai_de_uva_c_abacaxi_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03160253/106_deliai_de_uva_c_abacaxi_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03160253/106_deliai_de_uva_c_abacaxi_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-uva-com-abacaxi/" target="_blank">Delícia de Uva com Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-uva-com-abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco mousse ">
							<div className="bolo-box center">
								<span>#115</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-galak/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155340/115_bolo_feito_c_galak_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155340/115_bolo_feito_c_galak_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155340/115_bolo_feito_c_galak_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-feito-com-galak/" target="_blank">Bolo Feito com Galak®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-feito-com-galak/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi chocolate-branco mousse pimenta ">
							<div className="bolo-box center">
								<span>#117</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-de-pimenta/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/117_bolo-de-pimenta_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/117_bolo-de-pimenta_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/117_bolo-de-pimenta_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-de-pimenta/" target="_blank">Bolo de Pimenta</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-de-pimenta/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes brigadeiro cafe chocolate-ao-leite leite-em-po mousse ">
							<div className="bolo-box center">
								<span>#94</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-cafe/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-cafe/" target="_blank">Delícia de Café</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-cafe/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes avela castanha-de-caju chocolate-branco leite-em-po mousse nutella ">
							<div className="bolo-box center">
								<span>#93</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-ii/" target="_blank">Delícia de Leite com NUTELLA® ll</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-avela-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes leite-em-po limao mousse ">
							<div className="bolo-box center">
								<span>#91</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-limao/" target="_blank">Delícia de Leite com Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco morango mousse ">
							<div className="bolo-box center">
								<span>#104</span>
																<a href="https://sodiedoces.com.br/bolo/frutas-vermelhas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/frutas-vermelhas/" target="_blank">Frutas Vermelhas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/frutas-vermelhas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes amendoim baba-de-moca castanha-de-caju crocante damasco marshmallow suspiro ">
							<div className="bolo-box center">
								<span>#102</span>
																<a href="https://sodiedoces.com.br/bolo/dom-sodie/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/dom-sodie/" target="_blank">Dom Sodiê</a></h2>
								<a href="https://sodiedoces.com.br/bolo/dom-sodie/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco morango mousse ">
							<div className="bolo-box center">
								<span>#100</span>
																<a href="https://sodiedoces.com.br/bolo/sofia-rosa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/sofia-rosa/" target="_blank">Sofia Rosa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/sofia-rosa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco leite-em-po morango mousse ">
							<div className="bolo-box center">
								<span>#82</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-morango/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111124/82_delicia-de-leite_c-morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111124/82_delicia-de-leite_c-morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111124/82_delicia-de-leite_c-morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-morango/" target="_blank">Delícia de Leite com Morango</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-com-morango/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi leite-condensado mousse ">
							<div className="bolo-box center">
								<span>#79</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-leite-condensado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-leite-condensado/" target="_blank">Abacaxi com Leite Condensado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-leite-condensado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chantilly chocolate-branco damasco mousse nozes ">
							<div className="bolo-box center">
								<span>#68</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco/" target="_blank">Trufas Brancas com Nozes e Damasco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco mousse nozes ">
							<div className="bolo-box center">
								<span>#67</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes/" target="_blank">Trufas Brancas com Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco mousse ">
							<div className="bolo-box center">
								<span>#66</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-gotas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03162058/66_trufas_branca_c_gotas_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03162058/66_trufas_branca_c_gotas_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03162058/66_trufas_branca_c_gotas_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-gotas/" target="_blank">Trufas Brancas com Gotas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-gotas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi figo kiwi manga morango mousse pessego ">
							<div className="bolo-box center">
								<span>#65</span>
																<a href="https://sodiedoces.com.br/bolo/salada-de-frutas/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/salada-de-frutas/" target="_blank">Salada de Frutas</a></h2>
								<a href="https://sodiedoces.com.br/bolo/salada-de-frutas/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes mousse pessego ">
							<div className="bolo-box center">
								<span>#64</span>
																<a href="https://sodiedoces.com.br/bolo/pessego/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180615/20412_pessego_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180615/20412_pessego_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180615/20412_pessego_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/pessego/" target="_blank">Pêssego</a></h2>
								<a href="https://sodiedoces.com.br/bolo/pessego/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes ameixa coco doce-de-leite marshmallow ">
							<div className="bolo-box center">
								<span>#63</span>
																	<img id="selo-bolo-mes" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/01/06115348/SELO_BOLO_DO_MES-01-1-2023.png" alt="BOLO DO MÊS"/>
																<a href="https://sodiedoces.com.br/bolo/olho-de-sogra/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/olho-de-sogra/" target="_blank">Olho de Sogra</a></h2>
								<a href="https://sodiedoces.com.br/bolo/olho-de-sogra/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes doce-de-leite marshmallow nozes ">
							<div className="bolo-box center">
								<span>#62</span>
																<a href="https://sodiedoces.com.br/bolo/nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/nozes/" target="_blank">Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes leite-condensado morango mousse ">
							<div className="bolo-box center">
								<span>#61</span>
																<a href="https://sodiedoces.com.br/bolo/morango-com-leite-condensado/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-com-leite-condensado/" target="_blank">Morango com Leite Condensado</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-com-leite-condensado/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes amendoim crocante doce-de-leite marshmallow morango ">
							<div className="bolo-box center">
								<span>#60</span>
																<a href="https://sodiedoces.com.br/bolo/morango-com-crocante/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-com-crocante/" target="_blank">Morango com Crocante</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-com-crocante/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco morango mousse ">
							<div className="bolo-box center">
								<span>#59</span>
																<a href="https://sodiedoces.com.br/bolo/morango/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango/" target="_blank">Morango</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes maracuja mousse ">
							<div className="bolo-box center">
								<span>#58</span>
																<a href="https://sodiedoces.com.br/bolo/maracuja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/maracuja/" target="_blank">Maracujá</a></h2>
								<a href="https://sodiedoces.com.br/bolo/maracuja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes iogurte morango mousse ">
							<div className="bolo-box center">
								<span>#57</span>
																<a href="https://sodiedoces.com.br/bolo/iogurte-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/57.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/57.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/57-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/iogurte-ii/" target="_blank">Iogurte II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/iogurte-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes limao marshmallow ">
							<div className="bolo-box center">
								<span>#56</span>
																<a href="https://sodiedoces.com.br/bolo/ganache-de-limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/ganache-de-limao/" target="_blank">Ganache de Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/ganache-de-limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco coco morango mousse ">
							<div className="bolo-box center">
								<span>#55</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-morango/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-morango/" target="_blank">Delícia de Morango</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-morango/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco leite-em-po mousse ">
							<div className="bolo-box center">
								<span>#54</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii/" target="_blank">Delícia de Leite Ninho® II</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi coco doce-de-leite marshmallow ">
							<div className="bolo-box center">
								<span>#53</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-abacaxi/" target="_blank">Delícia de Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes amendoim castanha-de-caju crocante doce-de-leite marshmallow ">
							<div className="bolo-box center">
								<span>#52</span>
																<a href="https://sodiedoces.com.br/bolo/crocante/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/crocante/" target="_blank">Crocante</a></h2>
								<a href="https://sodiedoces.com.br/bolo/crocante/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco mousse ">
							<div className="bolo-box center">
								<span>#51</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate-branco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111113/51_chocolate_branco_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111113/51_chocolate_branco_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111113/51_chocolate_branco_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate-branco/" target="_blank">Chocolate Branco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate-branco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes brigadeiro chantilly chocolate-ao-leite morango ">
							<div className="bolo-box center">
								<span>#50</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-creme-e-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-com-creme-e-morangos/" target="_blank">Brigadeiro com Creme e Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-com-creme-e-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco morango mousse ">
							<div className="bolo-box center">
								<span>#48</span>
																<a href="https://sodiedoces.com.br/bolo/bombom-branco-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111111/48_bombom_branco_c-morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111111/48_bombom_branco_c-morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111111/48_bombom_branco_c-morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bombom-branco-com-morangos/" target="_blank">Bombom Branco com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bombom-branco-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco mousse ">
							<div className="bolo-box center">
								<span>#47</span>
																<a href="https://sodiedoces.com.br/bolo/bombom-branco/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155730/47_bombom_branco_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155730/47_bombom_branco_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155730/47_bombom_branco_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bombom-branco/" target="_blank">Bombom Branco</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bombom-branco/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi chocolate-branco doce-de-leite ">
							<div className="bolo-box center">
								<span>#46</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-gelado-de-abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-gelado-de-abacaxi/" target="_blank">Bolo Gelado de Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-gelado-de-abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes caramelo chocolate-ao-leite doce-de-leite mousse ">
							<div className="bolo-box center">
								<span>#45</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-da-vovo/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/45.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/45.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095951/45-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-da-vovo/" target="_blank">Bolo da Vovó</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-da-vovo/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes coco marshmallow ">
							<div className="bolo-box center">
								<span>#44</span>
																<a href="https://sodiedoces.com.br/bolo/beijinho/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/beijinho/" target="_blank">Beijinho</a></h2>
								<a href="https://sodiedoces.com.br/bolo/beijinho/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes baba-de-moca caramelo doce-de-leite marshmallow ">
							<div className="bolo-box center">
								<span>#42</span>
																<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-doce-de-leite/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-doce-de-leite/" target="_blank">Baba de Moça com Doce de Leite</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-doce-de-leite/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes baba-de-moca doce-de-leite mousse nozes ">
							<div className="bolo-box center">
								<span>#43</span>
																<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-nozes/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-nozes/" target="_blank">Baba de Moça com Nozes</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baba-de-moca-com-nozes/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes baba-de-moca chocolate-branco mousse ">
							<div className="bolo-box center">
								<span>#41</span>
																<a href="https://sodiedoces.com.br/bolo/baba-de-moca/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/baba-de-moca/" target="_blank">Baba de Moça</a></h2>
								<a href="https://sodiedoces.com.br/bolo/baba-de-moca/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes ameixa doce-de-leite mousse ">
							<div className="bolo-box center">
								<span>#40</span>
																<a href="https://sodiedoces.com.br/bolo/ameixa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/ameixa/" target="_blank">Ameixa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/ameixa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes chocolate-branco morango mousse suspiro ">
							<div className="bolo-box center">
								<span>#39</span>
																<a href="https://sodiedoces.com.br/bolo/alpes-suicos-com-morangos/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpes-suicos-com-morangos/" target="_blank">Alpes Suíços com Morangos</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpes-suicos-com-morangos/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes marshmallow morango mousse ">
							<div className="bolo-box center">
								<span>#38</span>
																<a href="https://sodiedoces.com.br/bolo/alaska/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alaska/" target="_blank">Alaska</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alaska/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi ameixa mousse ">
							<div className="bolo-box center">
								<span>#36</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-ameixa/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-ameixa/" target="_blank">Abacaxi com Ameixa</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-ameixa/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-branco bolos-branco todosindredientes abacaxi mousse ">
							<div className="bolo-box center">
								<span>#35</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi/" target="_blank">Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
									</div>

		
				<div className="row bolos-zero-lista all" style="display: none;">
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes brigadeiro morango mousse ">
							<div className="bolo-box center">
								<span>#152</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/" target="_blank">Brigadeiro Branco com Morangos Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes brigadeiro chocolate-ao-leite ">
							<div className="bolo-box center">
								<span>#151</span>
																<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/" target="_blank">Brigadeiro Tradicional Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite ">
							<div className="bolo-box center">
								<span>#129</span>
																<a href="https://sodiedoces.com.br/bolo/chifon-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chifon-zero-acucar/" target="_blank">Chifon Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chifon-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-branco leite-em-po ">
							<div className="bolo-box center">
								<span>#128</span>
																<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/" target="_blank">Delícia de Leite II Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-branco ">
							<div className="bolo-box center">
								<span>#153</span>
																<a href="https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/" target="_blank">Aerado Branco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite ">
							<div className="bolo-box center">
								<span>#146</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-zero-acucar/" target="_blank">Trufado de Chocolate Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite morango ">
							<div className="bolo-box center">
								<span>#147</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-com-morango-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-com-morango-zero-acucar/" target="_blank">Trufado de Chocolate com Morango Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-de-chocolate-com-morango-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite ">
							<div className="bolo-box center">
								<span>#71</span>
																<a href="https://sodiedoces.com.br/bolo/alpes-suicos-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/alpes-suicos-zero-acucar/" target="_blank">Alpes Suíços Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/alpes-suicos-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-branco morango mousse ">
							<div className="bolo-box center">
								<span>#73</span>
																<a href="https://sodiedoces.com.br/bolo/morango-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/morango-zero-acucar/" target="_blank">Morango Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/morango-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite morango ">
							<div className="bolo-box center">
								<span>#72</span>
																<a href="https://sodiedoces.com.br/bolo/chocomix-c-morangos-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103040/72_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103040/72_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103040/72_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocomix-c-morangos-zero-acucar/" target="_blank">Chocomix com Morangos Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocomix-c-morangos-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes abacaxi kiwi morango mousse uva pessego ">
							<div className="bolo-box center">
								<span>#75</span>
																<a href="https://sodiedoces.com.br/bolo/salada-de-frutas-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/salada-de-frutas-zero-acucar/" target="_blank">Salada de Frutas Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/salada-de-frutas-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite damasco mousse ">
							<div className="bolo-box center">
								<span>#76</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-c-damasco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103350/76_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103350/76_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103350/76_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-c-damasco-zero-acucar/" target="_blank">Trufado com Damasco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-c-damasco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite chocolate-branco ">
							<div className="bolo-box center">
								<span>#77</span>
																<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-zero-acucar/" target="_blank">Trufado Preto e Branco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufado-preto-e-branco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes abacaxi chocolate-branco coco mousse ">
							<div className="bolo-box center">
								<span>#69</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco-zero-acucar/" target="_blank">Abacaxi com Coco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-com-coco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes maracuja mousse ">
							<div className="bolo-box center">
								<span>#74</span>
																<a href="https://sodiedoces.com.br/bolo/maracuja-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/maracuja-zero-acucar/" target="_blank">Maracujá Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/maracuja-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes damasco mousse nozes ">
							<div className="bolo-box center">
								<span>#78</span>
																<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco-zero-acucar/" target="_blank">Trufas Brancas com Nozes e Damasco Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/trufas-brancas-com-nozes-e-damasco-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-zero bolos-zero-acucar todosindredientes chocolate-ao-leite chocolate-branco mousse ">
							<div className="bolo-box center">
								<span>#70</span>
																<a href="https://sodiedoces.com.br/bolo/aerado-zero-acucar/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/aerado-zero-acucar/" target="_blank">Aerado Zero Açúcar</a></h2>
								<a href="https://sodiedoces.com.br/bolo/aerado-zero-acucar/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
									</div>
 
				
				<div className="row bolos-caseiros-lista all" style="display: none;">
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes avela coco nutella ">
							<div className="bolo-box center">
								<span>#824</span>
																<a href="https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/" target="_blank">Caseirinho de Coco com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes avela nutella ">
							<div className="bolo-box center">
								<span>#826</span>
																<a href="https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/" target="_blank">Caseirinho Crispy com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes avela doce-de-leite nutella ">
							<div className="bolo-box center">
								<span>#825</span>
																<a href="https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/" target="_blank">Caseirinho de Pão de Mel com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes avela cenoura nutella ">
							<div className="bolo-box center">
								<span>#822</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/" target="_blank">Bolo Caseiro de Cenoura com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes avela chocolate-ao-leite nutella ">
							<div className="bolo-box center">
								<span>#823</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-chocolate-com-nutella/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-chocolate-com-nutella/" target="_blank">Bolo Caseiro de Chocolate com NUTELLA®</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-caseiro-de-chocolate-com-nutella/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes goiabada leite-em-po ">
							<div className="bolo-box center">
								<span>#819</span>
																<a href="https://sodiedoces.com.br/bolo/bolo-vulcao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/bolo-vulcao/" target="_blank">Bolo Vulcão de Leite Ninho® com Goiabada</a></h2>
								<a href="https://sodiedoces.com.br/bolo/bolo-vulcao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes maracuja ">
							<div className="bolo-box center">
								<span>#804</span>
																<a href="https://sodiedoces.com.br/bolo/maracuja-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/maracuja-2/" target="_blank">Maracujá</a></h2>
								<a href="https://sodiedoces.com.br/bolo/maracuja-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes limao ">
							<div className="bolo-box center">
								<span>#802</span>
																<a href="https://sodiedoces.com.br/bolo/limao/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/limao/" target="_blank">Limão</a></h2>
								<a href="https://sodiedoces.com.br/bolo/limao/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes fuba ">
							<div className="bolo-box center">
								<span>#808</span>
																<a href="https://sodiedoces.com.br/bolo/fuba-simples/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/fuba-simples/" target="_blank">Fubá Simples</a></h2>
								<a href="https://sodiedoces.com.br/bolo/fuba-simples/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes ">
							<div className="bolo-box center">
								<span>#806</span>
																<a href="https://sodiedoces.com.br/bolo/chocolate/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/chocolate/" target="_blank">Chocolate</a></h2>
								<a href="https://sodiedoces.com.br/bolo/chocolate/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes abacaxi ">
							<div className="bolo-box center">
								<span>#801</span>
																<a href="https://sodiedoces.com.br/bolo/abacaxi-2/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/abacaxi-2/" target="_blank">Abacaxi</a></h2>
								<a href="https://sodiedoces.com.br/bolo/abacaxi-2/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes banana ">
							<div className="bolo-box center">
								<span>#800</span>
																<a href="https://sodiedoces.com.br/bolo/banana/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/banana/" target="_blank">Banana</a></h2>
								<a href="https://sodiedoces.com.br/bolo/banana/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes erva-doce fuba ">
							<div className="bolo-box center">
								<span>#809</span>
																<a href="https://sodiedoces.com.br/bolo/fuba-com-erva-doce/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/fuba-com-erva-doce/" target="_blank">Fubá com Erva-Doce</a></h2>
								<a href="https://sodiedoces.com.br/bolo/fuba-com-erva-doce/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes fuba goiabada ">
							<div className="bolo-box center">
								<span>#810</span>
																<a href="https://sodiedoces.com.br/bolo/fuba-com-goiabada/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/fuba-com-goiabada/" target="_blank">Fubá com Goiabada</a></h2>
								<a href="https://sodiedoces.com.br/bolo/fuba-com-goiabada/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes laranja ">
							<div className="bolo-box center">
								<span>#813</span>
																<a href="https://sodiedoces.com.br/bolo/laranja/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/laranja/" target="_blank">Laranja</a></h2>
								<a href="https://sodiedoces.com.br/bolo/laranja/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes cenoura ">
							<div className="bolo-box center">
								<span>#811</span>
																<a href="https://sodiedoces.com.br/bolo/cenoura/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/cenoura/" target="_blank">Cenoura</a></h2>
								<a href="https://sodiedoces.com.br/bolo/cenoura/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes milho ">
							<div className="bolo-box center">
								<span>#815</span>
																<a href="https://sodiedoces.com.br/bolo/milho/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/milho/" target="_blank">Milho</a></h2>
								<a href="https://sodiedoces.com.br/bolo/milho/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes coco ">
							<div className="bolo-box center">
								<span>#816</span>
																<a href="https://sodiedoces.com.br/bolo/toalha-felpuda/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/toalha-felpuda/" target="_blank">Toalha Felpuda</a></h2>
								<a href="https://sodiedoces.com.br/bolo/toalha-felpuda/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
											<div className="col-md-3 col-6 bolos-caseiros bolos-caseiros todosindredientes ">
							<div className="bolo-box center">
								<span>#818</span>
																<a href="https://sodiedoces.com.br/bolo/formigueiro/" target="_blank">
									<img loading="lazy" width="235" height="235" src="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro.png" className="attachment-full size-full wp-post-image" alt="" decoding="async" srcset="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro-150x150.png 150w" sizes="(max-width: 235px) 100vw, 235px"/>								</a>
								<h2><a href="https://sodiedoces.com.br/bolo/formigueiro/" target="_blank">Formigueiro</a></h2>
								<a href="https://sodiedoces.com.br/bolo/formigueiro/" className="btn-bolos" target="_blank">Eu quero</a>
							</div>
						<br/>
						<br/>
						</div>
									</div>
			</div>
		</div>
	</div>

     
     </>
    );
  }
  
  export default Vitrine;