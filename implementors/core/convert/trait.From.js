(function() {var implementors = {};
implementors['void'] = [];implementors['libc'] = [];implementors['nix'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='nix/enum.Errno.html' title='nix::Errno'>Errno</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='nix/enum.Errno.html' title='nix::Errno'>Errno</a>&gt; for <a class='enum' href='nix/enum.Error.html' title='nix::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='nix/enum.Error.html' title='nix::Error'>Error</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>",];implementors['mio'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/struct.Ipv4Addr.html' title='mio::Ipv4Addr'>Ipv4Addr</a>&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;UdpSocket&gt; for <a class='struct' href='mio/udp/struct.UdpSocket.html' title='mio::udp::UdpSocket'>UdpSocket</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;UnixSocket&gt; for <a class='struct' href='mio/unix/struct.UnixSocket.html' title='mio::unix::UnixSocket'>UnixSocket</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;UnixSocket&gt; for <a class='struct' href='mio/unix/struct.UnixStream.html' title='mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;UnixSocket&gt; for <a class='struct' href='mio/unix/struct.UnixListener.html' title='mio::unix::UnixListener'>UnixListener</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>&gt; for <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>&gt; for <a class='struct' href='mio/unix/struct.PipeWriter.html' title='mio::unix::PipeWriter'>PipeWriter</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='type' href='https://doc.rust-lang.org/nightly/std/sys/ext/io/type.RawFd.html' title='std::sys::ext::io::RawFd'>RawFd</a>&gt; for <a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='nix/errno/consts/enum.Errno.html' title='nix::errno::consts::Errno'>Errno</a>&gt; for <a class='enum' href='nix/enum.Error.html' title='nix::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;UdpSocket&gt; for <a class='struct' href='mio/udp/struct.UdpSocket.html' title='mio::udp::UdpSocket'>UdpSocket</a>",];implementors['rotor'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/sys/unix/uds/struct.UnixSocket.html' title='mio::sys::unix::uds::UnixSocket'>UnixSocket</a>&gt; for <a class='struct' href='rotor/mio/unix/struct.UnixListener.html' title='rotor::mio::unix::UnixListener'>UnixListener</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/sys/unix/uds/struct.UnixSocket.html' title='mio::sys::unix::uds::UnixSocket'>UnixSocket</a>&gt; for <a class='struct' href='rotor/mio/unix/struct.UnixSocket.html' title='rotor::mio::unix::UnixSocket'>UnixSocket</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='rotor/mio/struct.Io.html' title='rotor::mio::Io'>Io</a>&gt; for <a class='struct' href='rotor/mio/unix/struct.PipeReader.html' title='rotor::mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='rotor/mio/struct.Io.html' title='rotor::mio::Io'>Io</a>&gt; for <a class='struct' href='rotor/mio/unix/struct.PipeWriter.html' title='rotor::mio::unix::PipeWriter'>PipeWriter</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/sys/unix/uds/struct.UnixSocket.html' title='mio::sys::unix::uds::UnixSocket'>UnixSocket</a>&gt; for <a class='struct' href='rotor/mio/unix/struct.UnixStream.html' title='rotor::mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt; for <a class='struct' href='rotor/mio/struct.Io.html' title='rotor::mio::Io'>Io</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='rotor/mio/struct.Ipv4Addr.html' title='rotor::mio::Ipv4Addr'>Ipv4Addr</a>&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='mio/sys/unix/udp/struct.UdpSocket.html' title='mio::sys::unix::udp::UdpSocket'>UdpSocket</a>&gt; for <a class='struct' href='rotor/mio/udp/struct.UdpSocket.html' title='rotor::mio::udp::UdpSocket'>UdpSocket</a>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a>&gt;&gt; for <a class='enum' href='rotor/enum.SpawnError.html' title='rotor::SpawnError'>SpawnError</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()