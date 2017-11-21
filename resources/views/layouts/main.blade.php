<!DOCTYPE html>
<html lang="en">

@include('layouts.parts.head')
@yield('styles')

<body class="site">

  <div id="app" class="site-content">
    @include('layouts.parts.header')
    {{-- <div class="container is-fluid">
      @include('layouts.parts.sidebar')
    </div> --}}

      @yield('content')

  </div>

  @include('layouts.parts.footer')

  @include('layouts.parts.scripts')

  @yield('scripts')
</body>
</html>
