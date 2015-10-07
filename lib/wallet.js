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

    client.create_account_with_brain_key  = function(brainKey,accountName,registarAccount,referrerAccount,broadcast,_cb){
      client.send(0,"create_account_with_brain_key",[brainKey,accountName,registarAccount,referrerAccount,broadcast],_cb);
    };

    client.info = function(_cb){
      client.send(0,"info",[],_cb);
    };

    client.get_witness = function(owner_account,_cb){
      client.send(0,"get_witness",[owner_account],_cb);
    };

    client.transfer = function(from,to,amount,symbol,memo,broadcast,_cb){
      client.send(0,"transfer",[from,to,amount,symbol,memo,broadcast],_cb);
    };

    client.publish_asset_feed = function(publishing_account,symbol,feed,broadcast,_cb){
      client.send(0,"publish_asset_feed",[publishing_account,symbol,feed,broadcast],_cb);
    };

    client.sell_asset = function(seller_account,amount_to_sell,symbol_to_sell,min_to_receive,
                                 symbol_to_receive,timeout_sec,fill_or_kill,broadcast,_cb){
      client.send(0,"sell_asset",[seller_account,amount_to_sell,symbol_to_sell,min_to_receive,
                                 symbol_to_receive,timeout_sec,fill_or_kill,broadcast],_cb);
    };

    client.help = function(_cb){
      client.send(0,"publish_asset_feed",[],_cb);
    };

    client.gethelp = function(method,_cb){
      client.send(0,"gethelp",[method],_cb);
    };

    client.info = function(_cb){
      client.send(0,"info",[],_cb);
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

    // client.set_fees_on_builder_transaction = function(_cb){
    // client.preview_builder_transaction = function(_cb){
    // client.sign_builder_transaction = function(_cb){
    // client.propose_builder_transaction = function(_cb){
    // client.remove_builder_transaction = function(_cb){
    // client.is_new = function(_cb){
    // client.is_locked = function(_cb){
    // client.lock = function(_cb){client.unlock = function(_cb){client.set_password = function(_cb){
    // client.dump_private_keys = function(_cb){
    // client.list_my_accounts = function(_cb){
    // client.list_accounts = function(_cb){
    // client.list_account_balances = function(_cb){
    // client.list_assets = function(_cb){
    // client.import_key = function(_cb){
    // client.import_accounts = function(_cb){
    // client.import_account_keys = function(_cb){
    // client.import_balance = function(_cb){
    // client.suggest_brain_key = function(_cb){
    // client.register_account = function(_cb){
    // client.upgrade_account = function(_cb){
    // client.create_account_with_brain_key = function(_cb){
    // client.sell_asset = function(_cb){
    // client.borrow_asset = function(_cb){
    // client.transfer = function(_cb){
    // client.create_asset = function(_cb){
    // client.update_asset = function(_cb){
    // client.update_bitasset = function(_cb){
    // client.update_asset_feed_producers = function(_cb){
    // client.publish_asset_feed = function(_cb){
    // client.issue_asset = function(_cb){
    client.get_asset = function(asset_name_or_id,_cb){
      client.send(0,"get_asset",[asset_name_or_id],_cb);
    };
    // client.get_bitasset_data = function(_cb){
    // client.fund_asset_fee_pool = function(_cb){
    // client.reserve_asset = function(_cb){
    // client.global_settle_asset = function(_cb){
    // client.settle_asset = function(_cb){
    // client.whitelist_account = function(_cb){
    // client.create_committee_member = function(_cb){
    // client.get_witness = function(_cb){
    // client.get_committee_member = function(_cb){
    // client.list_witnesses = function(_cb){
    // client.list_committee_members = function(_cb){
    // client.create_witness = function(_cb){
    client.update_witness = function(witness_name,url,block_signing_key,broadcast,_cb){
      client.send(0,"update_witness",[witness_name,url,block_signing_key,broadcast],_cb);
    };
    // client.get_vesting_balances = function(_cb){
    // client.withdraw_vesting = function(_cb){
    // client.vote_for_committee_member = function(_cb){
    // client.vote_for_witness = function(_cb){
    // client.set_voting_proxy = function(_cb){
    // client.set_desired_witness_and_committee_member_count = function(_cb){
    // client.get_account = function(_cb){
    // client.get_account_id = function(_cb){
    // client.get_block = function(_cb){
    // client.get_account_count = function(_cb){
    client.get_account_history = function(name,limit,_cb){
	client.send(0,"get_account_history",[name,limit],_cb);
    };

    // client.get_market_history = function(_cb){
    // client.get_global_properties = function(_cb){
    // client.get_dynamic_global_properties = function(_cb){
    // client.get_object = function(_cb){
    // client.get_private_key = function(_cb){
    // client.load_wallet_file = function(_cb){
    // client.normalize_brain_key = function(_cb){
    // client.get_limit_orders = function(_cb){
    // client.get_call_orders = function(_cb){
    // client.get_settle_orders = function(_cb){
    // client.save_wallet_file = function(_cb){
    // client.serialize_transaction = function(_cb){
    // client.sign_transaction = function(_cb){
    // client.get_prototype_operation = function(_cb){
    // client.propose_parameter_change = function(_cb){
    // client.propose_fee_change = function(_cb){
    // client.approve_proposal = function(_cb){
    // client.dbg_make_uia = function(_cb){
    // client.dbg_make_mia = function(_cb){
    // client.flood_network = function(_cb){
    // client.network_add_nodes = function(_cb){
    // client.network_get_connected_peers = function(_cb){
    // client.set_key_label = function(_cb){
    // client.get_key_label = function(_cb){
    // client.get_public_key = function(_cb){
    // client.get_blind_accounts = function(_cb){
    // client.get_my_blind_accounts = function(_cb){
    // client.get_blind_balances = function(_cb){
    // client.create_blind_account = function(_cb){
    // client.transfer_to_blind = function(_cb){
    // client.transfer_from_blind = function(_cb){
    // client.blind_transfer = function(_cb){
    // client.blind_history = function(_cb){
    // client.receive_blind_transfer = function(_cb){

    // Return without errors
    cb(false,client);
  });
};
exports.createWalletClient = createWalletClient;
