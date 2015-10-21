var libClient = require('./client');

// Create client for using wallet api
var createWalletClient = function(url,cb){
  libClient.createClient(url,function(err,client){
    if(err){
      cb(err);
      return;
    }
    // Set client witness apis
    ///////////////////////////////////
    client.copy_wallet_file = function(destination_filename,_cb){
      client.send(0,"copy_wallet_file",[destination_filename],_cb);
    };
    client.derive_private_key = function(prefix_string,sequence_number,_cb){
      client.send(0,"derive_private_key",[prefix_string,sequence_number],_cb);
    };
    client.info = function(_cb){
      client.send(0,"info",[],_cb);
    };
    client.get_block = function(num,_cb){
      client.send(0,"get_block",[num],_cb);
    };
    client.get_account_count = function(_cb){
      client.send(0,"get_account_count",[],_cb);
    };
    client.list_my_accounts = function(_cb){
      client.send(0,"list_my_accounts",[],_cb);
    };
    client.list_accounts = function(lowerbound,limit,_cb){
      client.send(0,"list_accounts",[lowerbound,limit],_cb);
    };
    client.list_account_balances = function(id,_cb){
      client.send(0,"list_account_balances",[id],_cb);
    };
    client.list_assets = function(lowerbound,limit,_cb){
      client.send(0,"list_assets",[lowerbound,limit],_cb);
    };
    client.get_account_history = function(name,limit,_cb){
      client.send(0,"get_account_history",[name,limit],_cb);
    };
    client.get_market_history = function(symbol,symbol2,bucket,_cb){
      client.send(0,"get_market_history",[symbol,symbol2,bucket],_cb);
    };
    client.get_limit_orders = function(a,b,limit,_cb){
      client.send(0,"get_limit_orders",[a,b,limit],_cb);
    };
    client.get_call_orders = function(a,limit,_cb){
      client.send(0,"get_call_orders",[a,limit],_cb);
    };
    client.get_settle_orders = function(a,limit,_cb){
      client.send(0,"get_settle_orders",[a,limit],_cb);
    };
    client.get_global_properties = function(_cb){
      client.send(0,"get_global_properties",[],_cb);
    };
    client.get_dynamic_global_properties = function(_cb){
      client.send(0,"get_dynamic_global_properties",[],_cb);
    };
    client.get_account = function(account_name_or_id,_cb){
      client.send(0,"get_account",[account_name_or_id],_cb);
    };
    client.get_asset = function(asset_name_or_id,_cb){
      client.send(0,"get_asset",[asset_name_or_id],_cb);
    };
    client.get_bitasset_data = function(asset_name_or_id,_cb){
      client.send(0,"get_bitasset_data",[asset_name_or_id],_cb);
    };
    client.get_account_id = function(account_name_or_id,_cb){
      client.send(0,"get_account_id",[account_name_or_id],_cb);
    };
    client.get_asset_id = function(asset_name_or_id,_cb){
      client.send(0,"get_asset_id",[asset_name_or_id],_cb);
    };
    client.get_object = function(id,_cb){
      client.send(0,"get_object",[id],_cb);
    };
    client.get_wallet_filename = function(_cb){
      client.send(0,"get_wallet_filename",[],_cb);
    };
    client.get_private_key = function(pubkey,_cb){
      client.send(0,"get_private_key",[pubkey],_cb);
    };
    client.begin_builder_transaction = function(_cb){
      client.send(0,"begin_builder_transaction",[],_cb);
    };
    client.add_operation_to_builder_transaction = function(transaction_handle,op,_cb){
      client.send(0,"add_operation_to_builder_transaction",[transaction_handle,op],_cb);
    };
    client.replace_operation_in_builder_transaction = function(handle,operation_index,new_op,_cb){
      client.send(0,"replace_operation_in_builder_transaction",[handle,operation_index,new_op],_cb);
    };
    client.set_fees_on_builder_transaction = function(handle,fee_asset,_cb){
      client.send(0,"set_fees_on_builder_transaction",[handle,fee_asset],_cb);
    };
    client.preview_builder_transaction = function(handle,_cb){
      client.send(0,"preview_builder_transaction",[handle],_cb);
    };
    client.sign_builder_transaction = function(transaction_handle,broadcast,_cb){
      client.send(0,"sign_builder_transaction",[transaction_handle,broadcast],_cb);
    };
    client.propose_builder_transaction = function(handle,expiration,review_period_seconds,broadcast,_cb){
      client.send(0,"propose_builder_transaction",[handle,expiration,review_period_seconds,broadcast],_cb);
    };
    client.remove_builder_transaction = function(handle,_cb){
      client.send(0,"remove_builder_transaction",[handle],_cb);
    };
    client.is_new = function(_cb){
      client.send(0,"is_new",[],_cb);
    };
    client.is_locked = function(_cb){
      client.send(0,"is_locked",[],_cb);
    };
    client.lock = function(_cb){
      client.send(0,"lock",[],_cb);
    };
    client.unlock = function(password,_cb){
      client.send(0,"unlock",[password],_cb);
    };
    client.set_password = function(password,_cb){
      client.send(0,"set_password",[password],_cb);
    };
    client.dump_private_keys = function(_cb){
      client.send(0,"dump_private_keys",[],_cb);
    };
    client.help = function(_cb){
      client.send(0,"help",[],_cb);
    };
    client.gethelp = function(method,_cb){
      client.send(0,"gethelp",[method],_cb);
    };
    client.load_wallet_file = function(wallet_filename,_cb){
      client.send(0,"load_wallet_file",[wallet_filename],_cb);
    };
    client.save_wallet_file = function(wallet_filename,_cb){
      client.send(0,"save_wallet_file",[wallet_filename],_cb);
    };
    client.set_wallet_filename = function(wallet_filename,_cb){
      client.send(0,"set_wallet_filename",[wallet_filename],_cb);
    };
    client.suggest_brain_key = function(_cb){
      client.send(0,"suggest_brain_key",[],_cb);
    };
    client.serialize_transaction = function(tx,_cb){
      client.send(0,"serialize_transaction",[tx],_cb);
    };
    client.import_key = function(account_name_or_id,wif_key,_cb){
      client.send(0,"import_key",[account_name_or_id,wif_key],_cb);
    };
    client.import_accounts = function(filename,password,_cb){
      client.send(0,"import_accounts",[filename,password],_cb);
    };
    client.import_account_keys = function(filename,password,src_account_name,dest_account_name,_cb){
      client.send(0,"import_account_keys",[filename,password,src_account_name,dest_account_name],_cb);
    };
    client.import_balance = function(account_name_or_id,wif_keys,broadcast,_cb){
      client.send(0,"import_balance",[account_name_or_id,wif_keys,broadcast],_cb);
    };
    client.normalize_brain_key = function(s,_cb){
      client.send(0,"normalize_brain_key",[s],_cb);
    };
    client.register_account = function(name,owner,active,registrar_account,referrer_account,referrer_percent,broadcast,_cb){
      client.send(0,"register_account",[name,owner,active,registrar_account,referrer_account,referrer_percent,broadcast],_cb);
    };
    client.upgrade_account = function(name,broadcast,_cb){
      client.send(0,"upgrade_account",[name,broadcast],_cb);
    };
    client.create_account_with_brain_key = function(brain_key,account_name,registrar_account,referrer_account,broadcast,_cb){
      client.send(0,"create_account_with_brain_key",[brain_key,account_name,registrar_account,referrer_account,broadcast],_cb);
    };
    client.transfer = function(from,to,amount,asset_symbol,memo,broadcast,_cb){
      client.send(0,"transfer",[from,to,amount,asset_symbol,memo,broadcast],_cb);
    };
    client.set_key_label = function(label,_cb){
      client.send(0,"set_key_label",[label],_cb);
    };
    client.get_key_label = function(_cb){
      client.send(0,"get_key_label",[],_cb);
    };
    client.create_blind_account = function(label,brain_key,_cb){
      client.send(0,"create_blind_account",[label,brain_key],_cb);
    };
    client.get_blind_balances = function(key_or_label,_cb){
      client.send(0,"get_blind_balances",[key_or_label],_cb);
    };
    client.get_blind_accounts = function(_cb){
      client.send(0,"get_blind_accounts",[],_cb);
    };
    client.get_my_blind_accounts = function(_cb){
      client.send(0,"get_my_blind_accounts",[],_cb);
    };
    client.get_public_key = function(label,_cb){
      client.send(0,"get_public_key",[label],_cb);
    };
    client.blind_history = function(key_or_account,_cb){
      client.send(0,"blind_history",[key_or_account],_cb);
    };
    client.receive_blind_transfer = function(confirmation_receipt,opt_from,opt_memo,_cb){
      client.send(0,"receive_blind_transfer",[confirmation_receipt,opt_from,opt_memo],_cb);
    };
    client.transfer_to_blind = function(from_account_id_or_name,asset_symbol,to_amounts,broadcast,_cb){
      client.send(0,"transfer_to_blind",[from_account_id_or_name,asset_symbol,to_amounts,broadcast],_cb);
    };
    client.transfer_from_blind = function(from_blind_account_key_or_label,to_account_id_or_name,amount,asset_symbol,broadcast,_cb){
      client.send(0,"transfer_from_blind",[from_blind_account_key_or_label,to_account_id_or_name,amount,asset_symbol,broadcast],_cb);
    };
    client.blind_transfer = function(from_key_or_label,to_key_or_label,amount,symbol,broadcast,_cb){
      client.send(0,"blind_transfer",[from_key_or_label,to_key_or_label,amount,symbol,broadcast],_cb);
    };
    client.sell_asset = function(seller_account,amount_to_sell,symbol_to_sell,min_to_receive,symbol_to_receive,timeout_sec,fill_or_kill,broadcast,_cb){
      client.send(0,"sell_asset",[seller_account,amount_to_sell,symbol_to_sell,min_to_receive,symbol_to_receive,timeout_sec,fill_or_kill,broadcast],_cb);
    };
    client.borrow_asset = function(borrower_name,amount_to_borrow,asset_symbol,amount_of_collateral,broadcast,_cb){
      client.send(0,"borrow_asset",[borrower_name,amount_to_borrow,asset_symbol,amount_of_collateral,broadcast],_cb);
    };
    client.create_asset = function(issuer,symbol,precision,common,bitasset_opts,broadcast,_cb){
      client.send(0,"create_asset",[issuer,symbol,precision,common,bitasset_opts,broadcast],_cb);
    };
    client.issue_asset = function(to_account,amount,symbol,memo,broadcast,_cb){
      client.send(0,"issue_asset",[to_account,amount,symbol,memo,broadcast],_cb);
    };
    client.update_asset = function(symbol,new_issuer,new_options,broadcast,_cb){
      client.send(0,"update_asset",[symbol,new_issuer,new_options,broadcast],_cb);
    };
    client.update_bitasset = function(symbol,new_options,broadcast,_cb){
      client.send(0,"update_bitasset",[symbol,new_options,broadcast],_cb);
    };
    client.update_asset_feed_producers = function(symbol,new_feed_producers,broadcast,_cb){
      client.send(0,"update_asset_feed_producers",[symbol,new_feed_producers,broadcast],_cb);
    };
    client.publish_asset_feed = function(publishing_account,symbol,feed,broadcast,_cb){
      client.send(0,"publish_asset_feed",[publishing_account,symbol,feed,broadcast],_cb);
    };
    client.fund_asset_fee_pool = function(from,symbol,amount,broadcast,_cb){
      client.send(0,"fund_asset_fee_pool",[from,symbol,amount,broadcast],_cb);
    };
    client.reserve_asset = function(from,amount,symbol,broadcast,_cb){
      client.send(0,"reserve_asset",[from,amount,symbol,broadcast],_cb);
    };
    client.global_settle_asset = function(symbol,settle_price,broadcast,_cb){
      client.send(0,"global_settle_asset",[symbol,settle_price,broadcast],_cb);
    };
    client.settle_asset = function(account_to_settle,amount_to_settle,symbol,broadcast,_cb){
      client.send(0,"settle_asset",[account_to_settle,amount_to_settle,symbol,broadcast],_cb);
    };
    client.whitelist_account = function(authorizing_account,account_to_list,new_listing_status,broadcast,_cb){
      client.send(0,"whitelist_account",[authorizing_account,account_to_list,new_listing_status,broadcast],_cb);
    };
    client.create_committee_member = function(owner_account,url,broadcast,_cb){
      client.send(0,"create_committee_member",[owner_account,url,broadcast],_cb);
    };
    client.list_witnesses = function(lowerbound,limit,_cb){
      client.send(0,"list_witnesses",[lowerbound,limit],_cb);
    };
    client.list_committee_members = function(lowerbound,limit,_cb){
      client.send(0,"list_committee_members",[lowerbound,limit],_cb);
    };
    client.get_witness = function(owner_account,_cb){
      client.send(0,"get_witness",[owner_account],_cb);
    };
    client.get_committee_member = function(owner_account,_cb){
      client.send(0,"get_committee_member",[owner_account],_cb);
    };
    client.create_witness = function(owner_account,url,broadcast,_cb){
      client.send(0,"create_witness",[owner_account,url,broadcast],_cb);
    };
    client.update_witness = function(witness_name,url,block_signing_key,broadcast,_cb){
      client.send(0,"update_witness",[witness_name,url,block_signing_key,broadcast],_cb);
    };
    client.create_worker = function(owner_account,work_begin_date,work_end_date,daily_pay,name,url,worker_settings,broadcast,_cb){
      client.send(0,"create_worker",[owner_account,work_begin_date,work_end_date,daily_pay,name,url,worker_settings,broadcast],_cb);
    };
    client.update_worker_votes = function(account,delta,broadcast,_cb){
      client.send(0,"update_worker_votes",[account,delta,broadcast],_cb);
    };
    client.get_vesting_balances = function(account_name,_cb){
      client.send(0,"get_vesting_balances",[account_name],_cb);
    };
    client.withdraw_vesting = function(witness_name,amount,asset_symbol,broadcast,_cb){
      client.send(0,"withdraw_vesting",[witness_name,amount,asset_symbol,broadcast],_cb);
    };
    client.vote_for_committee_member = function(voting_account,committee_member,approve,broadcast,_cb){
      client.send(0,"vote_for_committee_member",[voting_account,committee_member,approve,broadcast],_cb);
    };
    client.vote_for_witness = function(voting_account,witness,approve,broadcast,_cb){
      client.send(0,"vote_for_witness",[voting_account,witness,approve,broadcast],_cb);
    };
    client.set_voting_proxy = function(account_to_modify,voting_account,broadcast,_cb){
      client.send(0,"set_voting_proxy",[account_to_modify,voting_account,broadcast],_cb);
    };
    client.set_desired_witness_and_committee_member_count = function(account_to_modify,desired_number_of_witnesses,desired_number_of_committee_members,broadcast,_cb){
      client.send(0,"set_desired_witness_and_committee_member_count",[account_to_modify,desired_number_of_witnesses,desired_number_of_committee_members,broadcast],_cb);
    };
    client.sign_transaction = function(tx,broadcast,_cb){
      client.send(0,"sign_transaction",[tx,broadcast],_cb);
    };
    client.get_prototype_operation = function(operation_type,_cb){
      client.send(0,"get_prototype_operation",[operation_type],_cb);
    };
    client.propose_parameter_change = function(proposing_account,expiration_time,changed_values,broadcast,_cb){
      client.send(0,"propose_parameter_change",[proposing_account,expiration_time,changed_values,broadcast],_cb);
    };
    client.propose_fee_change = function(proposing_account,expiration_time,changed_values,broadcast,_cb){
      client.send(0,"propose_fee_change",[proposing_account,expiration_time,changed_values,broadcast],_cb);
    };
    client.approve_proposal = function(fee_paying_account,proposal_id,delta,broadcast,_cb){
      client.send(0,"approve_proposal",[fee_paying_account,proposal_id,delta,broadcast],_cb);
    };
    client.dbg_make_uia = function(creator,symbol,_cb){
      client.send(0,"dbg_make_uia",[creator,symbol],_cb);
    };
    client.dbg_make_mia = function(creator,symbol,_cb){
      client.send(0,"dbg_make_mia",[creator,symbol],_cb);
    };
    client.flood_network = function(prefix,number_of_transactions,_cb){
      client.send(0,"flood_network",[prefix,number_of_transactions],_cb);
    };
    client.network_add_nodes = function(nodes,_cb){
      client.send(0,"network_add_nodes",[nodes],_cb);
    };
    client.network_get_connected_peers = function(_cb){
      client.send(0,"network_get_connected_peers",[],_cb);
    };
    client.blind_transfer_help = function(from_key_or_label,to_key_or_label,amount,symbol,broadcast,to_temp,_cb){
      client.send(0,"blind_transfer_help",[from_key_or_label,to_key_or_label,amount,symbol,broadcast,to_temp],_cb);
    };
    client.get_result_formatters = function(_cb){
      client.send(0,"get_result_formatters",[],_cb);
    };
    client.encrypt_keys = function(_cb){
      client.send(0,"encrypt_keys",[],_cb);
    };

    // Return without errors
    cb(false,client);
  });
};
exports.createWalletClient = createWalletClient;
