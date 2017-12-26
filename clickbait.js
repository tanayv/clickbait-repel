

function openAnalysis() {
    var element = document.createElement("div");
    element.setAttribute("id", "clickbaitAnalysis");
    var element1 = document.createElement("div");
    element1.setAttribute("class", "analysisBox");
    element.appendChild(element1);
    document.body.appendChild(element);
    document.body.setAttribute("style", "overflow-y: hidden !important");
}

function closeAnalysis() {
    document.getElementById("clickbaitAnalysis").remove();
    
}


var element = document.createElement('div');
element.setAttribute("class", "ProfileTweet-action");

element.onclick = openAnalysis;

var element1 = document.createElement('button');
element1.setAttribute("class", "ProfileTweet-actionButton u-textUserColorHover");
element1.setAttribute("type", "button");
element1.setAttribute("data-nav", "share_tweet_dm");

var element2 = document.createElement('div');
element2.setAttribute("class", "IconContainer js-tooltip");
element2.setAttribute("data-original-title", "Clickbait Repel");

var element3 = document.createElement('span');
element3.setAttribute("class", "Icon Icon--medium Icon--lightning");

var element4 = document.createElement('span');
element4.setAttribute("class", "u-hiddenVisually");
element4.innerHTML = "Clickbait-Repel";

element2.appendChild(element3);
element2.appendChild(element4);
element1.appendChild(element2);
element.appendChild(element1);

document.querySelector(".ProfileTweet-actionList").appendChild(element);
/*
<div class="DMDock">
      <div class="DMDock-compose">
        <div class="DMActivity DMCompose js-ariaDocument u-chromeOverflowFix DMActivity--open" role="document">
  <div class="DMActivity-header">
      <div class="DMActivity-navigation">
        <button type="button" class="DMActivity-back u-textUserColorHover" to-inbox="">
          <span class="Icon Icon--caretLeft u-linkComplex-target Icon--medium"></span>
          <span class="u-hiddenVisually">Back to inbox</span>
        </button>
      </div>

    <h2 class="DMActivity-title js-ariaTitle" id="dm_dialog-header">
          New Message

    </h2>

    <div class="DMActivity-toolbar">
      
      <button type="button" class="DMActivity-close js-close u-textUserColorHover">
        <span class="Icon Icon--close Icon--medium"></span>
        <span class="u-hiddenVisually">Close</span>
      </button>
    </div>
  </div>

  <div class="DMActivity-container">
    <div class="DMActivity-notice">
      <div class="DMNotice DMNotice--error DMErrorBar" style="display: none;">
  <div class="DMNotice-message">    <div class="DMErrorBar-text"></div>
</div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

      <div class="DMNotice DMNotice--toast " style="display: none;">
  <div class="DMNotice-message"></div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

      
    </div>

    

    <div class="DMActivity-body js-ariaBody ">
          <div class=" DMDialogTypeahead">
  <span class="DMTypeaheadHeader">Send message to:</span>
  <ul class="TokenizedMultiselect-inputContainer">
    <li>
      <textarea class="TokenizedMultiselect-input twttr-directmessage-input js-initial-focus dm-to-input" aria-autocomplete="list" aria-expanded="true" rows="1" type="text" placeholder="Enter a name" aria-owns="TokenizedMultiselectOwns4132678305" aria-activedescendant="tokenizedMultiselectHighlight1065624657"></textarea>
    </li>
  </ul>
  <ul id="DMComposeTypeaheadSuggestions" class="DMTypeaheadSuggestions u-scrollY" role="listbox">  <li class="DMTypeaheadHeader">
    <span>Recent</span>
  </li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::54813331" data-token-text="Achal Varma 🇮🇳" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/869283960362291204/7HOGCjU3_normal.jpg" alt="Achal Varma 🇮🇳" title="Achal Varma 🇮🇳">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Achal Varma <img class="Emoji Emoji--forText" src="https://abs.twimg.com/emoji/v2/72x72/1f1ee-1f1f3.png" draggable="false" alt="🇮🇳" title="Flag of India" aria-label="Emoji: Flag of India"></b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>_achalv</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::558797310" data-token-text="Manchester United" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/934706707258904578/7HAVD2b0_normal.jpg" alt="Manchester United" title="Manchester United">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Manchester United</b><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>manutd</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::2627976793" data-token-text="Raphael." role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/814789324826955776/mLSaLatY_normal.jpg" alt="Raphael." title="Raphael.">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Raphael.</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>elraphou</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item is-highlighted" data-token-id="dmAccounts::156247074" data-token-text="West Ham United" role="option" tabindex="-1" id="tokenizedMultiselectHighlight1065624657" aria-selected="true">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/935091030877265920/pWk_InUb_normal.jpg" alt="West Ham United" title="West Ham United">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">West Ham United</b><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>westhamutd</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::36889519" data-token-text="RΛMIN NΛSIBOV" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/896399812450557953/gP3PRbXP_normal.jpg" alt="RΛMIN NΛSIBOV" title="RΛMIN NΛSIBOV">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">RΛMIN NΛSIBOV</b><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>raminnasibov</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::364147616" data-token-text="Martijn" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/660886727263842305/Pke5aL5f_normal.jpg" alt="Martijn" title="Martijn">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Martijn</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>martijnvdbroeck</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::2910776724" data-token-text="Abhishek Anand" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/838674826105585666/O3kWVsIt_normal.jpg" alt="Abhishek Anand" title="Abhishek Anand">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Abhishek Anand</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>thebishk</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::529423419" data-token-text="Bharat Kashyap" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/901717683258892289/wJhHVAyR_normal.jpg" alt="Bharat Kashyap" title="Bharat Kashyap">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Bharat Kashyap</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>bharattttttt</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
    <li class="DMTokenizedMultiselectSuggestion DMTypeaheadSuggestions-item" data-token-id="dmAccounts::419455334" data-token-text="Anubhav Sachdeva" role="option" tabindex="-1">
  <div class="DMTokenizedMultiselectSuggestion-body">
    <div class="DMTypeaheadItem">
  <div class="DMTypeaheadItem-avatar" aria-hidden="true">
<div class="DMAvatar DMAvatar--1 u-chromeOverflowFix">
    <span class="DMAvatar-container">
      <img class="DMAvatar-image" src="https://pbs.twimg.com/profile_images/485102481156743168/Tn21WwEP_normal.jpeg" alt="Anubhav Sachdeva" title="Anubhav Sachdeva">
    </span>
</div>
  </div>
  <div class="DMTypeaheadItem-body">
    <div class="DMTypeaheadItem-title account-group">
        <b class="fullname">Anubhav Sachdeva</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>truelfcred</b></span>
        </div>
  </div>
</div>
  </div>
  <div class="DMTokenizedMultiselectSuggestion-state">
    <span class="DMTokenizedMultiselectSuggestion-selectedIndicator Icon Icon--check"></span>
    <span class="DMTokenizedMultiselectSuggestion-preselectedIndicator">In Group</span>
  </div>
</li>
</ul>
</div>

    </div>

    <div class="DMActivity-footer u-emptyHide">    <div class="DMButtonBar">
      <button type="button" class="EdgeButton EdgeButton--primary dm-initiate-conversation disabled" disabled="">Next</button>
    </div>
</div>
  </div>
</div>

      </div>

      <div class="DMDock-conversations">
        <div class="DMConversationContainer">
          <div class="DMActivity DMConversation js-ariaDocument u-chromeOverflowFix" role="document">
  <div class="DMActivity-header">
      <div class="DMActivity-navigation">
        <button type="button" class="DMActivity-back u-textUserColorHover" to-inbox="">
          <span class="Icon Icon--caretLeft u-linkComplex-target Icon--medium"></span>
          <span class="u-hiddenVisually">Back to inbox</span>
        </button>
      </div>

    <h2 class="DMActivity-title js-ariaTitle" id="dm_dialog-header">
          <div class="DMUpdateAvatar" aria-haspopup="true" data-has-custom-avatar="false">
<div class="DMPopover DMPopover--center">
  <button class="DMPopover-button" aria-haspopup="true">
          <span class="u-hiddenVisually">Update group photo.</span>
      <div class="DMUpdateAvatar-avatar"></div>

  </button>
  <div class="DMPopover-content Caret Caret--top Caret--stroked ">
          <ul class="DMPopoverMenu u-textCenter js-focus-on-open u-dropdownUserColor" tabindex="-1" role="menu">
        <li class="DMUpdateAvatar-view">
          <button type="button" class="DMPopoverMenu-button">View photo</button>
        </li>
        <li class="DMUpdateAvatar-change">
          <button type="button" class="DMPopoverMenu-button">Upload photo</button>
        </li>
        <li class="DMUpdateAvatar-remove">
          <button type="button" class="DMPopoverMenu-button">Remove</button>
        </li>
      </ul>

      <div class="DMUpdateAvatar-photoSelector photo-selector" tabindex="-1" aria-hidden="true">
        <div class="image-selector">
          <input type="hidden" name="media_file_name" class="file-name">
          <input type="hidden" name="media_data_empty" class="file-data">
          <label class="t1-label">
            <span class="u-hiddenVisually">Add Photo</span>
            <input type="file" name="media[]" class="file-input js-tooltip" accept="image/*" tabindex="-1" title="Add Photo">
          </label>
        </div>
      </div>

  </div>
</div></div>
    <div class="DMUpdateName u-textTruncate">
  <div class="DMUpdateName-header account-group">
    <span class="DMUpdateName-name u-textTruncate"></span><span class="UserBadges"><span class="Icon Icon--verified js-verified hidden"><span class="u-hiddenVisually">Verified account</span></span><span class="Icon Icon--protected js-protected hidden"><span class="u-hiddenVisually">Protected Tweets</span></span></span>
  </div>
  <div class="DMUpdateName-screenName u-textTruncate"></div>
  <div class="DMUpdateName-controls">
    <span class="DMUpdateName-spinner DMSpinner"></span>
    <div class="DMUpdateName-form input-group u-hidden">
      <input type="text" class="DMUpdateName-input" aria-label="Edit group name">
      <button class="DMUpdateName-confirm u-textUserColorLight">
        <span class="Icon Icon--check"></span>
        <span class="u-hiddenVisually">Save group name</span>
      </button>
    </div>
  </div>
</div>


    </h2>

    <div class="DMActivity-toolbar">
          <button class="DMConversation-convoSettings dm-to-convoSettings u-textUserColorHover">
      <span class="Icon Icon--info Icon--medium"></span>
      <span class="u-hiddenVisually">Conversation Settings</span>
    </button>

      <button type="button" class="DMActivity-close js-close u-textUserColorHover">
        <span class="Icon Icon--close Icon--medium"></span>
        <span class="u-hiddenVisually">Close</span>
      </button>
    </div>
  </div>

  <div class="DMActivity-container">
    <div class="DMActivity-notice">
      <div class="DMNotice DMNotice--error DMErrorBar" style="display: none;">
  <div class="DMNotice-message">    <div class="DMErrorBar-text"></div>
</div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

      <div class="DMNotice DMNotice--toast " style="display: none;">
  <div class="DMNotice-message"></div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

          <div class="DMNotice  DMDeleteMessage" style="display: none;">
  <div class="DMNotice-message">    Are you sure you want to delete this message?
</div>
  <div class="DMNotice-actions u-emptyHide">    <button type="button" class="DMDeleteMessage-cancel EdgeButton EdgeButton--tertiary">Cancel</button>
    <button type="button" class="DMDeleteMessage-confirm EdgeButton EdgeButton--danger js-initial-focus">Delete</button>
</div>
</div>

    <div class="DMNotice  DMReportMessage" style="display: none;">
  <div class="DMNotice-message">    The message will be deleted from your conversation view.
</div>
  <div class="DMNotice-actions u-emptyHide">    <button type="button" class="DMReportMessage-cancel EdgeButton EdgeButton--tertiary">Cancel</button>
    <button type="button" class="DMReportMessage-spam EdgeButton EdgeButton--secondary">It's spam</button>
    <button type="button" class="DMReportMessage-abuse EdgeButton EdgeButton--secondary">It's abusive</button>
</div>
</div>

    <div class="DMNotice  DMResendMessage DMNotice--error" style="display: none;">
  <div class="DMNotice-message">    <div class="DMResendMessage-errorText">
      <div class="DMResendMessage-defaultErrorMessage">
        Failed to send this message
      </div>
      <div class="DMResendMessage-customErrorMessage"></div>
    </div>
    <div class="DMResendMessage-messageTextContainer u-textTruncate">
      Message text: <span class="DMResendMessage-messageText"></span>
    </div>
    <textarea aria-hidden="true" class="DMResendMessage-messageCopyContainer visuallyhidden"></textarea>
</div>
  <div class="DMNotice-actions u-emptyHide">    <button type="button" class="DMResendMessage-cancel EdgeButton EdgeButton--tertiary">Discard</button>
    <button type="button" class="DMResendMessage-copy EdgeButton EdgeButton--secondary">Copy message text</button>
    <button type="button" class="DMResendMessage-confirm js-initial-focus EdgeButton EdgeButton--secondary">Retry</button>
</div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>


    </div>

    

    <div class="DMActivity-body js-ariaBody DMConversation-container">
          <div class="DMConversation-newMessagesPillContainer u-table">
      <div class="DMConversation-newMessagesPill is-hidden">
        <span class="Icon Icon--arrowDown"></span> New messages
      </div>
    </div>
    <div class="DMConversation-scrollContainer js-modal-scrollable" aria-atomic="false" role="log" aria-live="polite">
      <span class="DMConversation-spinner DMSpinner"></span>
      <ol class="DMConversation-content dm-convo js-dm-conversation"></ol>
      <div class="DMConversation-typingIndicator u-hidden"><div class="DMTypingIndicator">
  <div class="DMTypingIndicator-avatarsContainer"></div>
  <div class="DMTypingIndicator-messageBubble">
    <div class="TypingIndicatorMessageBubble is-hidden Caret Caret--left">
  <div class="TypingIndicatorMessageBubble-dotContainer">
    <div class="TypingIndicatorMessageBubble-dot"></div>
    <div class="TypingIndicatorMessageBubble-dot"></div>
    <div class="TypingIndicatorMessageBubble-dot"></div>
  </div>
</div>
  </div>
</div></div>
    </div>

    </div>

    <div class="DMActivity-footer u-emptyHide">    <div class="DMConversation-sendingStateIndicator u-bgUserColorLightest u-textUserColorLight" style="display: none"></div>

    
    <div class="DMConversation-trustRequest u-hidden"></div>

    <div class="DMConversation-composer u-bgUserColorLightest">
        <form class="DMComposer tweet-form tweet-showing" target="dm-post-iframe" action="//upload.twitter.com/i/media/upload.iframe" method="post" enctype="multipart/form-data">
  <input type="hidden" name="authenticity_token" class="auth-token">

  <div class="DMComposer-container u-borderUserColorLighter">
    <div class="DMComposer-attachment">
      <div class="DMComposer-tweet">
        <div class="modal-tweet disabled-links">


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards  has-content
" data-tweet-id="945340962309582848" data-item-id="945340962309582848" data-permalink-path="/ObamaFoundation/status/945340962309582848" data-conversation-id="945340962309582848" data-tweet-nonce="945340962309582848-2a46fdea-198f-431d-b95f-3afdcef9a00e" data-tweet-stat-initialized="true" data-screen-name="ObamaFoundation" data-name="The Obama Foundation" data-user-id="2293315159" data-you-follow="true" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;2293315159&quot;,&quot;screen_name&quot;:&quot;ObamaFoundation&quot;,&quot;name&quot;:&quot;The Obama Foundation&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;The Obama Foundation&quot;,&quot;emojified_text_as_html&quot;:&quot;The Obama Foundation&quot;}}]" data-disclosure-type="" data-has-cards="true" data-detected="1">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/ObamaFoundation" data-user-id="2293315159" tabindex="-1">
      <img class="avatar js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/899997253753905153/zvGMV7XY_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">The Obama Foundation</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>ObamaFoundation</b></span></a>

        
        <small class="time">
  <a href="/ObamaFoundation/status/945340962309582848" class="tweet-timestamp js-permalink js-nav js-tooltip" title="10:40 PM - 25 Dec 2017" data-conversation-id="945340962309582848" tabindex="-1"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1514221823" data-time-ms="1514221823000" data-long-form="true" aria-hidden="true">3m</span><span class="u-hiddenVisually" data-aria-label-part="last">3 minutes ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
          <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>ObamaFoundation</b></span></button></li>
    <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>ObamaFoundation</b></span></button></li>

        <li class="block-link js-actionBlock" data-nav="block">
          <button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>ObamaFoundation</b></span></button>
        </li>
        <li class="unblock-link js-actionUnblock" data-nav="unblock">
          <button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>ObamaFoundation</b></span></button>
        </li>
      <li class="report-link js-actionReport" data-nav="report">
        <button type="button" class="dropdown-link">
          
            
            Report Tweet
        </button>
      </li>
      <li class="dropdown-divider"></li>
      <li class="js-actionMomentMakerAddTweetToOtherMoment MomentMakerAddTweetToOtherMoment">
        <button type="button" class="dropdown-link">Add to other Moment</button>
      </li>
      <li class="js-actionMomentMakerCreateMoment">
        <button type="button" class="dropdown-link">Add to new Moment</button>
      </li>
  </ul>
</div>
</div>

  </div>

      </div>

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize  js-tweet-text tweet-text" lang="et" data-aria-label-part="0">Merry Christmas! <a href="https://t.co/bBFdGgM7Kz" class="twitter-timeline-link" data-pre-embedded="true" dir="ltr" tabindex="-1">pic.twitter.com/bBFdGgM7Kz</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        AdaptiveMedia--hiddenWhenNotExpanded
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(0.6666666666666666 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="https://pbs.twimg.com/media/DR6GhHxWkAAoaNc.jpg" data-element-context="platform_photo_card" style="background-color:rgba(6,10,38,1.0);" data-dominant-color="[6,10,38]">
  <img data-aria-label-part="" src="https://pbs.twimg.com/media/DR6GhHxWkAAoaNc.jpg" alt="" style="width: 100%; top: -0px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="22">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-945340962309582848" data-aria-label-part="">22 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="139">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-945340962309582848" data-aria-label-part="">139 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="530">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-945340962309582848" data-aria-label-part="">530 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-945340962309582848">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">22</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-945340962309582848">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">139</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">139</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-945340962309582848">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">530</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">530</span>
  </span>

  </button>
</div>


      <div class="ProfileTweet-action ProfileTweet-action--dm">
    <button class="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionShareViaDM" type="button" data-nav="share_tweet_dm">
      <div class="IconContainer js-tooltip" title="Direct message">
        <span class="Icon Icon--medium Icon--dm"></span>
        <span class="u-hiddenVisually">Direct message</span>
      </div>
    </button>
  </div>


    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>

</div>
<button class="DMComposer-discardTweet">
  <span class="Icon Icon--close"></span>
  <span class="u-hiddenVisually">Remove Tweet attachment</span>
</button>

      </div>

      <div class="DMComposer-media">
        <div class="thumbnail-container">
          <div class="thumbnail-wrapper">
            <div class="ComposerThumbnails"></div>
            <div class="js-attribution attribution"></div>
            <div class="ComposerVideoInfo u-hidden"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="ComposerDragHelp">
  <span class="ComposerDragHelp-text"></span>
</div>

<div class="RichEditor RichEditor--emojiPicker">
  
  <div class="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
  <div class="RichEditor-container u-borderRadiusInherit">
    
    <div class="RichEditor-scrollContainer u-borderRadiusInherit">
              <div class="DMComposer-editor tweet-box rich-editor js-initial-focus is-showPlaceholder" data-default-placeholder="Start a new message" data-attachment-placeholder="Add a comment..." data-from-message-me-card-placeholder="Send a private message" id="tweet-box-dm-conversation" contenteditable="true" spellcheck="true" role="textbox" aria-multiline="false" dir="ltr"><div><br></div></div>

      <div class="RichEditor-pictographs" aria-hidden="true"></div>
    </div>
    
            <div class="RichEditor-rightItems RichEditor-bottomItems">
          <div class="EmojiPicker dropdown is-loading" style="">
  <button type="button" class="EmojiPicker-trigger js-dropdown-toggle js-tooltip u-textUserColorHover" title="Add emoji" data-delay="150" aria-haspopup="true">
    <span class="Icon Icon--smiley"></span>
    <span class="text u-hiddenVisually">
      Add emoji
    </span>
  </button>
  <div class="EmojiPicker-dropdownMenu dropdown-menu" tabindex="-1">
    <div class="EmojiPicker-content Caret Caret--stroked"></div>
  </div>
</div>

        </div>

  </div>
  <div class="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
</div>
  </div>

  <div class="TweetBoxExtras">
    <div class="DMComposer-gifSearch TweetBoxExtras-item">
      <div class="FoundMediaSearch found-media-search dropdown">
  <button class="btn js-found-media-search-trigger js-dropdown-toggle icon-btn js-tooltip disabled" type="button" title="Add a GIF" data-delay="150" aria-haspopup="true" disabled="">
    <span class="Icon Icon--gif Icon--large"></span>
    <span class="text u-hiddenVisually">
      Add a GIF
    </span>
  </button>
  <div class="FoundMediaSearch-dropdownMenu dropdown-menu" tabindex="-1">
    <div class="FoundMediaSearch-content Caret Caret--stroked">
      <div class="FoundMediaSearch-query">
        <input class="FoundMediaSearch-queryInput" type="text" autocomplete="off" placeholder="Search for a GIF">
        <span class="Icon Icon--search"></span>
      </div>
      <div class="FoundMediaSearch-results">
        <div class="FoundMediaSearch-items"></div>
        <div class="FoundMediaSearch-pagination"></div>
      </div>
    </div>
  </div>
</div>

    </div>

    <div class="DMComposer-mediaPicker TweetBoxExtras-item">
      <div class="photo-selector disabled">
  <button aria-hidden="true" class="btn icon-btn js-tooltip disabled" type="button" tabindex="-1" data-original-title="Add photo or video" disabled="">
      <span class="tweet-camera Icon Icon--media"></span>
    <span class="text add-photo-label u-hiddenVisually">Add photo or video</span>
  </button>
  <div class="image-selector">
    <input type="hidden" name="media_data_empty" class="file-data">
    <div class="multi-photo-data-container hidden">
    </div>
    <label class="t1-label">
     
      <span class="visuallyhidden">Add photo or video</span>
      <input type="file" name="media_empty" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" multiple="" class="file-input js-tooltip" data-original-title="Add photo or video" data-delay="150">
    </label>
  </div>
</div>

    </div>
    <div class="DMComposer-quickReplyDismiss"><div class="QuickReplyDismiss" aria-hidden="true">
  <button type="button" class="QuickReplyDismiss-icon btn icon-btn">
    <span class="Icon Icon--close"></span>
    <span class="u-hiddenVisually">Close</span>
  </button>
</div>
</div>
  </div>

  <div class="DMComposer-send">
    <button class="EdgeButton EdgeButton--primary tweet-action disabled" aria-disabled="true" type="button">
      <span class="button-text messaging-text">Send</span>
    </button>
  </div>
<div style="position: absolute; visibility: hidden;"><div><br></div></div></form>

      <div class="DMConversation-quickReply"></div>
    </div>

    <div class="DMConversation-readonly">
      <div class="DMConversation-readOnlyFooter">
        You can no longer send messages to this person. <a href="https://support.twitter.com/articles/14606#faq" target="_blank" class="learn-more" rel="noopener">Learn more</a>
      </div>
    </div>
    <div class="DMConversation-feedback">
      <div class="DMFeedback">
  <button type="button" class="DMFeedback-dismiss">
    <span class="Icon Icon--close"></span>
    <span class="u-hiddenVisually">Dismiss</span>
  </button>
  <iframe class="B2CFeedback" data-current-view="" scrolling="no" frameborder="0" height="0" src="">
  </iframe>
</div>

    </div>
</div>
  </div>
</div>

          <div class="DMActivity DMAddParticipants js-ariaDocument u-chromeOverflowFix" role="document">
  <div class="DMActivity-header">
      <div class="DMActivity-navigation">
        <button type="button" class="DMActivity-back u-textUserColorHover" to-convosettings="">
          <span class="Icon Icon--caretLeft u-linkComplex-target Icon--medium"></span>
          <span class="u-hiddenVisually">Back to inbox</span>
        </button>
      </div>

    <h2 class="DMActivity-title js-ariaTitle" id="dm_dialog-header">
          Add People

    </h2>

    <div class="DMActivity-toolbar">
      
      <button type="button" class="DMActivity-close js-close u-textUserColorHover">
        <span class="Icon Icon--close Icon--medium"></span>
        <span class="u-hiddenVisually">Close</span>
      </button>
    </div>
  </div>

  <div class="DMActivity-container">
    <div class="DMActivity-notice">
      <div class="DMNotice DMNotice--error DMErrorBar" style="display: none;">
  <div class="DMNotice-message">    <div class="DMErrorBar-text"></div>
</div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

      <div class="DMNotice DMNotice--toast " style="display: none;">
  <div class="DMNotice-message"></div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

      
    </div>

    

    <div class="DMActivity-body js-ariaBody DMAddParticipants-container js-initial-focus">
          <div class="DMAddParticipants-spinner">
      <div class="DMSpinner"></div>
    </div>
<div class="DMAddParticipants-content DMDialogTypeahead">
  <span class="DMTypeaheadHeader">Send message to:</span>
  <ul class="TokenizedMultiselect-inputContainer">
    <li>
      <textarea class="TokenizedMultiselect-input twttr-directmessage-input js-initial-focus dm-to-input" aria-autocomplete="list" aria-expanded="true" rows="1" type="text" placeholder="Enter a name" aria-owns="TokenizedMultiselectOwns3376573888"></textarea>
    </li>
  </ul>
  <ul id="DMComposeTypeaheadSuggestions" class="DMTypeaheadSuggestions u-scrollY" role="listbox"></ul>
</div>
    </div>

    <div class="DMActivity-footer u-emptyHide">    <div class="DMButtonBar">
      <button type="button" class="EdgeButton EdgeButton--primary DMAddParticipants-done">Done</button>
    </div>
</div>
  </div>
</div>

          <div class="DMActivity DMConversationSettings js-ariaDocument u-chromeOverflowFix" role="document">
  <div class="DMActivity-header">
      <div class="DMActivity-navigation">
        <button type="button" class="DMActivity-back u-textUserColorHover" to-convo="">
          <span class="Icon Icon--caretLeft u-linkComplex-target Icon--medium"></span>
          <span class="u-hiddenVisually">Back to inbox</span>
        </button>
      </div>

    <h2 class="DMActivity-title js-ariaTitle" id="dm_dialog-header">
      
    </h2>

    <div class="DMActivity-toolbar">
      <div class="DMConversationSettings-dropdown u-posRelative u-textLeft u-textUserColorHover"></div>
      <button type="button" class="DMActivity-close js-close u-textUserColorHover">
        <span class="Icon Icon--close Icon--medium"></span>
        <span class="u-hiddenVisually">Close</span>
      </button>
    </div>
  </div>

  <div class="DMActivity-container">
    <div class="DMActivity-notice">
      <div class="DMNotice DMNotice--error DMErrorBar" style="display: none;">
  <div class="DMNotice-message">    <div class="DMErrorBar-text"></div>
</div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

      <div class="DMNotice DMNotice--toast " style="display: none;">
  <div class="DMNotice-message"></div>
  <div class="DMNotice-actions u-emptyHide"></div>
    <button type="button" class="DMNotice-dismiss">
      <span class="Icon Icon--close"></span>
      <span class="u-hiddenVisually">Dismiss</span>
    </button>
</div>

          <div class="DMNotice  DMDeleteConversation" style="display: none;">
  <div class="DMNotice-message">    <span class="DMDeleteConversation-message">
      This conversation history will be deleted from your inbox.
    </span>
</div>
  <div class="DMNotice-actions u-emptyHide">    <button type="button" class="DMDeleteConversation-cancel EdgeButton EdgeButton--tertiary">Cancel</button>
    <button type="button" class="DMDeleteConversation-confirm EdgeButton EdgeButton--danger js-initial-focus">Leave</button>
</div>
</div>


    </div>

    

    <div class="DMActivity-body js-ariaBody DMConversationSettings-container js-initial-focus flex-module u-scrollY">
          <div class="DMConversationSettings-avatar">
      <div class="DMUpdateAvatar" aria-haspopup="true" data-has-custom-avatar="false">
<div class="DMPopover DMPopover--center">
  <button class="DMPopover-button" aria-haspopup="true">
          <span class="u-hiddenVisually">Update group photo.</span>
      <div class="DMUpdateAvatar-avatar"></div>

  </button>
  <div class="DMPopover-content Caret Caret--top Caret--stroked ">
          <ul class="DMPopoverMenu u-textCenter js-focus-on-open u-dropdownUserColor" tabindex="-1" role="menu">
        <li class="DMUpdateAvatar-view">
          <button type="button" class="DMPopoverMenu-button">View photo</button>
        </li>
        <li class="DMUpdateAvatar-change">
          <button type="button" class="DMPopoverMenu-button">Upload photo</button>
        </li>
        <li class="DMUpdateAvatar-remove">
          <button type="button" class="DMPopoverMenu-button">Remove</button>
        </li>
      </ul>

      <div class="DMUpdateAvatar-photoSelector photo-selector" tabindex="-1" aria-hidden="true">
        <div class="image-selector">
          <input type="hidden" name="media_file_name" class="file-name">
          <input type="hidden" name="media_data_empty" class="file-data">
          <label class="t1-label">
            <span class="u-hiddenVisually">Add Photo</span>
            <input type="file" name="media[]" class="file-input js-tooltip" accept="image/*" tabindex="-1" title="Add Photo">
          </label>
        </div>
      </div>

  </div>
</div></div>
    </div>

    <div class="DMConversationSettings-name">
      <div class="DMUpdateName u-textTruncate">
  <div class="DMUpdateName-header account-group">
    <span class="DMUpdateName-name u-textTruncate"></span><span class="UserBadges"><span class="Icon Icon--verified js-verified hidden"><span class="u-hiddenVisually">Verified account</span></span><span class="Icon Icon--protected js-protected hidden"><span class="u-hiddenVisually">Protected Tweets</span></span></span>
  </div>
  <div class="DMUpdateName-screenName u-textTruncate"></div>
  <div class="DMUpdateName-controls">
    <span class="DMUpdateName-spinner DMSpinner"></span>
    <div class="DMUpdateName-form input-group u-hidden">
      <input type="text" class="DMUpdateName-input" aria-label="Edit group name">
      <button class="DMUpdateName-confirm u-textUserColorLight">
        <span class="Icon Icon--check"></span>
        <span class="u-hiddenVisually">Save group name</span>
      </button>
    </div>
  </div>
</div>

    </div>

    <div class="DMConversationSettings-notifications">
      <h3>Notifications</h3>
      <label class="t1-label checkbox">
        <input type="checkbox" name="dm[toggle_notifications]">Mute notifications
      </label>
      <p class="DMConversationSettings-notificationsFooter t1-infotext"></p>
    </div>

    <div class="DMConversationSettings-subscriptions">
      <h3>Subscriptions</h3>
      <label class="t1-label checkbox">
        <input type="checkbox" name="dm[toggle_subscriptions]">Subscribe to updates
      </label>
      <p class="DMConversationSettings-subscriptionsFooter t1-infotext"></p>
    </div>

    <div class="DMConversationSettings-participants u-flexColumn u-flexGrow"></div>

    </div>

    <div class="DMActivity-footer u-emptyHide">    <div class="DMConversationSettings-footer u-flexRow u-bgUserColorLightest">
      <button type="button" class="EdgeButton EdgeButton--secondary js-actionReportConversation"></button>
      <button type="button" class="EdgeButton EdgeButton--danger js-actionDeleteConversation"></button>
    </div>
</div>
  </div>
</div>

        </div>
      </div>
    </div>
    */