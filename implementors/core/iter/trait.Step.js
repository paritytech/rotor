(function() {var implementors = {};
implementors['void'] = [];implementors['libc'] = [];implementors['mio'] = [];implementors['rotor'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()